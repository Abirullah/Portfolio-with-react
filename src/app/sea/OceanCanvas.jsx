import { useEffect, useMemo, useRef } from "react";
import styles from "./SeaJourney.module.css";

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function OceanCanvas({ progressRef, mouseRef, reducedMotion = false }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  const settings = useMemo(() => {
    const isCoarsePointer = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)")?.matches;
    const cpuCores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency : undefined;
    const isLowPower = typeof cpuCores === "number" ? cpuCores <= 4 : false;
    const reduceFx = isCoarsePointer || isLowPower;

    return {
      bubbleCount: reducedMotion ? 24 : reduceFx ? 60 : 90,
      fishCount: reducedMotion ? 6 : reduceFx ? 10 : 14,
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

    const bubbles = [];
    const fish = [];
    const ripples = [];
    let lastRippleAt = 0;

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

    function spawnBubble(bubble) {
      bubble.x = rand(0, width);
      bubble.y = rand(height * 0.9, height * 1.25);
      bubble.r = rand(2, 10);
      bubble.vy = rand(0.35, 1.25);
      bubble.vx = rand(-0.25, 0.25);
      bubble.wobble = rand(0.4, 1.9);
      bubble.phase = rand(0, Math.PI * 2);
      bubble.alpha = rand(0.08, 0.28);
    }

    function spawnFish(f) {
      f.dir = Math.random() > 0.5 ? 1 : -1;
      f.size = rand(10, 26);
      f.x = f.dir === 1 ? -f.size * 6 : width + f.size * 6;
      f.y = rand(height * 0.15, height * 0.85);
      f.speed = rand(0.35, 1.15);
      f.phase = rand(0, Math.PI * 2);
      const palette = [
        [74, 163, 255],
        [66, 245, 230],
        [255, 209, 102],
        [255, 122, 182],
      ];
      f.color = palette[(Math.random() * palette.length) | 0];
      f.alpha = rand(0.18, 0.42);
    }

    function ensureEntities() {
      while (bubbles.length < settings.bubbleCount) {
        const bubble = {};
        spawnBubble(bubble);
        bubbles.push(bubble);
      }
      while (fish.length < settings.fishCount) {
        const f = {};
        spawnFish(f);
        fish.push(f);
      }
    }

    function drawBubble(b) {
      ctx.save();
      ctx.globalAlpha = b.alpha;
      const g = ctx.createRadialGradient(b.x - b.r * 0.35, b.y - b.r * 0.35, 1, b.x, b.y, b.r * 1.6);
      g.addColorStop(0, "rgba(255,255,255,0.8)");
      g.addColorStop(0.3, "rgba(255,255,255,0.18)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = Math.min(1, b.alpha + 0.18);
      ctx.strokeStyle = "rgba(210,245,255,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function drawFish(f) {
      const [r, g, b] = f.color;
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.scale(f.dir, 1);
      ctx.rotate(Math.sin(f.phase) * 0.07);

      const bodyAlpha = f.alpha;
      ctx.fillStyle = `rgba(${r},${g},${b},${bodyAlpha})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, f.size * 1.6, f.size * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();

      // tail
      ctx.globalAlpha = bodyAlpha * 0.9;
      ctx.beginPath();
      ctx.moveTo(-f.size * 1.45, 0);
      ctx.lineTo(-f.size * 2.3, -f.size * 0.75);
      ctx.lineTo(-f.size * 2.3, f.size * 0.75);
      ctx.closePath();
      ctx.fill();

      // eye
      ctx.globalAlpha = Math.min(1, bodyAlpha + 0.2);
      ctx.fillStyle = "rgba(5,10,14,0.65)";
      ctx.beginPath();
      ctx.arc(f.size * 0.8, -f.size * 0.12, f.size * 0.18, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function drawRipple(rp) {
      const alpha = rp.life * 0.35;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = "rgba(190,245,255,0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function tick(t) {
      timeRef.current = t;
      const progress = clamp01(progressRef.current || 0);

      // ambient darkness as you dive
      const dark = 0.25 + progress * 0.55;

      ctx.clearRect(0, 0, width, height);

      // ripples first so they feel "under" the particles
      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        const rp = ripples[i];
        rp.r += 1.8;
        rp.life -= 0.018;
        if (rp.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        drawRipple(rp);
      }

      // bubbles
      for (let i = 0; i < bubbles.length; i += 1) {
        const b = bubbles[i];
        b.phase += 0.03;
        b.x += b.vx + Math.sin(b.phase) * b.wobble * 0.12;
        b.y -= b.vy * (1.05 - progress * 0.55);

        if (b.x < -40) b.x = width + 40;
        if (b.x > width + 40) b.x = -40;
        if (b.y < -60) spawnBubble(b);

        const depthFade = 1 - dark * 0.65;
        const saved = b.alpha;
        b.alpha = saved * depthFade;
        drawBubble(b);
        b.alpha = saved;
      }

      // fish
      for (let i = 0; i < fish.length; i += 1) {
        const f = fish[i];
        f.phase += 0.02 + f.speed * 0.005;
        f.x += f.speed * (0.95 - progress * 0.35) * f.dir;
        f.y += Math.sin(f.phase) * 0.12;

        const leftBound = -f.size * 8;
        const rightBound = width + f.size * 8;
        if (f.dir === 1 && f.x > rightBound) spawnFish(f);
        if (f.dir === -1 && f.x < leftBound) spawnFish(f);

        const depthFade = 1 - dark * 0.7;
        const saved = f.alpha;
        f.alpha = saved * depthFade;
        drawFish(f);
        f.alpha = saved;
      }

      raf = window.requestAnimationFrame(tick);
    }

    function onMouseMove(e) {
      if (reducedMotion) return;
      const now = timeRef.current;
      if (now - lastRippleAt < 70) return;
      lastRippleAt = now;

      const x = e.clientX;
      const y = e.clientY;
      const prev = mouseRef.current || { x, y };
      mouseRef.current = { x, y };

      const dx = x - prev.x;
      const dy = y - prev.y;
      if (dx * dx + dy * dy < 24) return;

      ripples.push({ x, y, r: 0, life: 1 });
      if (ripples.length > 14) ripples.shift();
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
  }, [progressRef, mouseRef, reducedMotion, settings]);

  return <canvas ref={canvasRef} className={styles.oceanCanvas} aria-hidden="true" />;
}

export default OceanCanvas;
