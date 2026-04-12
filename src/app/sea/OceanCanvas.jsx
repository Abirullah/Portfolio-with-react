import { useEffect, useMemo, useRef } from "react";
import styles from "./SeaJourney.module.css";

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function pickOne(values) {
  return values[(Math.random() * values.length) | 0];
}

function drawFish(ctx, sprite, color) {
  ctx.save();
  ctx.translate(sprite.x, sprite.y);
  ctx.scale(sprite.dir, 1);
  ctx.rotate(Math.sin(sprite.phase) * 0.08);
  ctx.globalAlpha = sprite.alpha;

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, sprite.size * 1.8, sprite.size * 0.95, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-sprite.size * 1.45, 0);
  ctx.lineTo(-sprite.size * 2.35, -sprite.size * 0.85);
  ctx.lineTo(-sprite.size * 2.35, sprite.size * 0.85);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(3, 15, 28, 0.7)";
  ctx.beginPath();
  ctx.arc(sprite.size * 0.8, -sprite.size * 0.14, sprite.size * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBird(ctx, sprite, color) {
  ctx.save();
  ctx.translate(sprite.x, sprite.y);
  ctx.scale(sprite.dir, 1);
  ctx.rotate(Math.sin(sprite.phase) * 0.18);
  ctx.globalAlpha = sprite.alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1.5, sprite.size * 0.12);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-sprite.size, 0);
  ctx.quadraticCurveTo(-sprite.size * 0.4, -sprite.size * 0.95, 0, 0);
  ctx.quadraticCurveTo(sprite.size * 0.4, -sprite.size * 0.95, sprite.size, 0);
  ctx.stroke();
  ctx.restore();
}

function drawLeaf(ctx, mote, color) {
  ctx.save();
  ctx.translate(mote.x, mote.y);
  ctx.rotate(mote.rotation);
  ctx.globalAlpha = mote.alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -mote.size);
  ctx.quadraticCurveTo(mote.size * 0.95, -mote.size * 0.3, 0, mote.size);
  ctx.quadraticCurveTo(-mote.size * 0.95, -mote.size * 0.3, 0, -mote.size);
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, -mote.size * 0.8);
  ctx.lineTo(0, mote.size * 0.8);
  ctx.stroke();
  ctx.restore();
}

function drawBubble(ctx, mote, color) {
  ctx.save();
  ctx.globalAlpha = mote.alpha;
  const gradient = ctx.createRadialGradient(
    mote.x - mote.size * 0.35,
    mote.y - mote.size * 0.35,
    1,
    mote.x,
    mote.y,
    mote.size * 1.6
  );
  gradient.addColorStop(0, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.3, color);
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(mote.x, mote.y, mote.size * 1.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDust(ctx, mote, color) {
  ctx.save();
  ctx.translate(mote.x, mote.y);
  ctx.rotate(mote.rotation);
  ctx.globalAlpha = mote.alpha;
  const gradient = ctx.createLinearGradient(-mote.size * 2, 0, mote.size * 2, 0);
  gradient.addColorStop(0, "rgba(255,255,255,0)");
  gradient.addColorStop(0.5, color);
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(-mote.size * 2, -mote.size * 0.55, mote.size * 4, mote.size * 1.1);
  ctx.restore();
}

function drawCloud(ctx, mote, color) {
  ctx.save();
  ctx.globalAlpha = mote.alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(mote.x - mote.size * 0.6, mote.y, mote.size * 0.7, Math.PI, Math.PI * 2);
  ctx.arc(mote.x, mote.y - mote.size * 0.28, mote.size * 0.92, Math.PI, Math.PI * 2);
  ctx.arc(mote.x + mote.size * 0.76, mote.y, mote.size * 0.64, Math.PI, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawLightTrail(ctx, sprite, color) {
  ctx.save();
  ctx.translate(sprite.x, sprite.y);
  ctx.globalAlpha = sprite.alpha;
  ctx.fillStyle = color;
  const radius = sprite.size * 0.25;
  const width = sprite.size * 3.2;
  const height = sprite.size * 0.5;
  const x = -sprite.size * 1.6;
  const y = -sprite.size * 0.25;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = sprite.alpha * 0.45;
  ctx.fillRect(-sprite.size * 5, -sprite.size * 0.07, sprite.size * 3.6, sprite.size * 0.14);
  ctx.restore();
}

function drawEcho(ctx, echo, color) {
  ctx.save();
  ctx.globalAlpha = echo.life * 0.34;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(echo.x, echo.y, echo.radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function OceanCanvas({
  progressRef,
  mouseRef,
  reducedMotion = false,
  environment = "sea",
  theme,
}) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  const settings = useMemo(() => {
    const isCoarsePointer = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)")?.matches;
    const cpuCores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency : undefined;
    const lowPower = typeof cpuCores === "number" ? cpuCores <= 4 : false;
    const reduceFx = reducedMotion || isCoarsePointer || lowPower;

    return {
      moteCount: reduceFx ? 38 : 68,
      spriteCount: reduceFx ? 7 : 12,
      maxDpr: reduceFx ? 1.5 : 2,
    };
  }, [reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let lastEchoAt = 0;

    const motes = [];
    const sprites = [];
    const echoes = [];

    const tintA = theme?.primary ?? "#7dd3fc";
    const tintB = theme?.secondary ?? "#38bdf8";
    const tintC = theme?.accent ?? "#f9a8d4";
    const palette = [tintA, tintB, tintC, "rgba(255,255,255,0.92)"];

    function resize() {
      dpr = Math.min(settings.maxDpr, window.devicePixelRatio || 1);
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawnMote(mote) {
      mote.kind = environment === "forest" ? (Math.random() > 0.45 ? "leaf" : "glow") : environment;
      mote.x = rand(-width * 0.1, width * 1.1);
      mote.y = rand(-height * 0.2, height * 1.1);
      mote.size = environment === "sky" ? rand(16, 38) : rand(4, 16);
      mote.speed = rand(0.15, 0.9);
      mote.alpha = rand(0.12, 0.35);
      mote.drift = rand(-0.5, 0.5);
      mote.phase = rand(0, Math.PI * 2);
      mote.rotation = rand(0, Math.PI * 2);
      mote.color = pickOne(palette);

      if (environment === "sea") {
        mote.y = rand(height * 0.6, height * 1.2);
        mote.size = rand(3, 12);
      }
      if (environment === "desert") {
        mote.size = rand(10, 22);
        mote.alpha = rand(0.06, 0.18);
      }
      if (environment === "city") {
        mote.kind = Math.random() > 0.5 ? "rain" : "glow";
        mote.size = rand(3, 10);
      }
    }

    function spawnSprite(sprite) {
      sprite.kind = environment;
      sprite.dir = Math.random() > 0.5 ? 1 : -1;
      sprite.x = sprite.dir === 1 ? -160 : width + 160;
      sprite.y = rand(height * 0.14, height * 0.84);
      sprite.size = environment === "city" ? rand(18, 30) : rand(12, 26);
      sprite.speed = rand(0.3, 1.2);
      sprite.phase = rand(0, Math.PI * 2);
      sprite.alpha = rand(0.18, 0.42);
      sprite.color = pickOne(palette);

      if (environment === "sky") {
        sprite.y = rand(height * 0.1, height * 0.45);
      }
      if (environment === "desert") {
        sprite.y = rand(height * 0.12, height * 0.48);
      }
      if (environment === "city") {
        sprite.y = rand(height * 0.64, height * 0.9);
      }
    }

    function ensureEntities() {
      while (motes.length < settings.moteCount) {
        const mote = {};
        spawnMote(mote);
        motes.push(mote);
      }
      while (sprites.length < settings.spriteCount) {
        const sprite = {};
        spawnSprite(sprite);
        sprites.push(sprite);
      }
    }

    function drawBackgroundMotion(progress, time) {
      ctx.save();
      ctx.globalAlpha = 0.12 + progress * 0.12;

      if (environment === "forest") {
        ctx.strokeStyle = tintA;
        ctx.lineWidth = 1;
        for (let index = 0; index < 10; index += 1) {
          const x = ((index + 1) / 11) * width;
          const sway = Math.sin(time * 0.0006 + index) * 18;
          ctx.beginPath();
          ctx.moveTo(x + sway, 0);
          ctx.lineTo(x - sway * 0.5, height);
          ctx.stroke();
        }
      } else if (environment === "desert") {
        ctx.strokeStyle = tintC;
        for (let index = 0; index < 5; index += 1) {
          ctx.lineWidth = 1.4;
          const y = height * (0.58 + index * 0.08) - progress * 55;
          ctx.beginPath();
          for (let step = 0; step <= 24; step += 1) {
            const x = (step / 24) * width;
            const wave = Math.sin(step * 0.8 + time * 0.001 + index) * 9;
            if (step === 0) ctx.moveTo(x, y + wave);
            else ctx.lineTo(x, y + wave);
          }
          ctx.stroke();
        }
      } else if (environment === "sky") {
        ctx.strokeStyle = tintA;
        ctx.lineWidth = 1;
        for (let index = 0; index < 12; index += 1) {
          const y = height * (index / 12) + Math.sin(time * 0.0007 + index) * 8;
          ctx.beginPath();
          ctx.moveTo(-20, y);
          ctx.lineTo(width + 20, y - 18);
          ctx.stroke();
        }
      } else if (environment === "city") {
        ctx.strokeStyle = tintB;
        ctx.lineWidth = 1;
        for (let index = 0; index < 8; index += 1) {
          const y = height * 0.72 + index * 22 - progress * 44;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else {
        ctx.strokeStyle = tintA;
        ctx.lineWidth = 1;
        for (let index = 0; index < 10; index += 1) {
          const y = height * (0.16 + index * 0.07) + Math.sin(time * 0.0008 + index) * 12;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.quadraticCurveTo(width * 0.45, y + 10, width, y - 6);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    function tick(time) {
      timeRef.current = time;
      const progress = clamp01(progressRef.current || 0);
      ctx.clearRect(0, 0, width, height);

      drawBackgroundMotion(progress, time);

      for (let index = echoes.length - 1; index >= 0; index -= 1) {
        const echo = echoes[index];
        echo.radius += 1.6;
        echo.life -= 0.02;
        if (echo.life <= 0) {
          echoes.splice(index, 1);
          continue;
        }
        drawEcho(ctx, echo, tintC);
      }

      for (let index = 0; index < motes.length; index += 1) {
        const mote = motes[index];
        mote.phase += 0.02;
        mote.rotation += 0.01;

        if (environment === "sea") {
          mote.x += mote.drift + Math.sin(mote.phase) * 0.18;
          mote.y -= mote.speed * (0.7 + (1 - progress) * 0.3);
          if (mote.y < -40) spawnMote(mote);
          drawBubble(ctx, mote, mote.color);
        } else if (environment === "forest") {
          mote.x += mote.drift + Math.sin(mote.phase) * 0.5;
          mote.y += mote.speed * 0.8;
          if (mote.y > height + 60) {
            spawnMote(mote);
            mote.y = -40;
          }
          if (mote.kind === "leaf") drawLeaf(ctx, mote, mote.color);
          else drawBubble(ctx, { ...mote, size: mote.size * 0.55 }, mote.color);
        } else if (environment === "desert") {
          mote.x += mote.speed * 1.4;
          mote.y += Math.sin(mote.phase) * 0.15;
          if (mote.x > width + 80) {
            spawnMote(mote);
            mote.x = -80;
          }
          drawDust(ctx, mote, mote.color);
        } else if (environment === "sky") {
          mote.x += mote.speed * 0.85;
          mote.y += Math.sin(mote.phase) * 0.18;
          if (mote.x > width + 120) {
            spawnMote(mote);
            mote.x = -120;
            mote.y = rand(height * 0.05, height * 0.55);
          }
          drawCloud(ctx, mote, mote.color);
        } else {
          mote.y += mote.speed * 2.4;
          if (mote.y > height + 40) {
            spawnMote(mote);
            mote.y = -40;
          }
          ctx.save();
          ctx.globalAlpha = mote.alpha;
          ctx.strokeStyle = mote.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mote.x, mote.y);
          ctx.lineTo(mote.x + mote.drift * 18, mote.y + mote.size * 2.2);
          ctx.stroke();
          ctx.restore();
        }
      }

      for (let index = 0; index < sprites.length; index += 1) {
        const sprite = sprites[index];
        sprite.phase += 0.018 + sprite.speed * 0.004;
        sprite.x += sprite.speed * sprite.dir;
        sprite.y += Math.sin(sprite.phase) * 0.16;

        if (sprite.dir === 1 && sprite.x > width + 160) spawnSprite(sprite);
        if (sprite.dir === -1 && sprite.x < -160) spawnSprite(sprite);

        if (environment === "sea") {
          drawFish(ctx, sprite, sprite.color);
        } else if (environment === "forest" || environment === "desert" || environment === "sky") {
          drawBird(ctx, sprite, sprite.color);
        } else {
          drawLightTrail(ctx, sprite, sprite.color);
        }
      }

      raf = window.requestAnimationFrame(tick);
    }

    function onMouseMove(event) {
      if (reducedMotion) return;
      const now = timeRef.current;
      if (now - lastEchoAt < 70) return;

      const x = event.clientX;
      const y = event.clientY;
      const previous = mouseRef.current || { x, y };
      mouseRef.current = { x, y };

      const dx = x - previous.x;
      const dy = y - previous.y;
      if (dx * dx + dy * dy < 18) return;

      lastEchoAt = now;
      echoes.push({ x, y, radius: 0, life: 1 });
      if (echoes.length > 18) echoes.shift();
    }

    resize();
    ensureEntities();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(raf);
    };
  }, [environment, mouseRef, progressRef, reducedMotion, settings, theme]);

  return <canvas ref={canvasRef} className={styles.oceanCanvas} aria-hidden="true" />;
}

export default OceanCanvas;
