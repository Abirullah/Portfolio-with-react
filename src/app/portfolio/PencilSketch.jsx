import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./PencilSketch.module.css";

// Normalized keypoints (0..1000) tracing the illustration in artistic order
const SKETCH_KEYPOINTS = [
  // 1. Hair & Head Outline (0.00 -> 0.20)
  { t: 0.00, x: 440, y: 150 },
  { t: 0.03, x: 470, y: 130 },
  { t: 0.06, x: 530, y: 135 },
  { t: 0.09, x: 565, y: 175 },
  { t: 0.12, x: 570, y: 220 },
  { t: 0.15, x: 540, y: 270 },
  { t: 0.18, x: 490, y: 295 },
  { t: 0.20, x: 440, y: 280 },

  // 2. Facial Features & Stubble (0.20 -> 0.35)
  { t: 0.23, x: 470, y: 215 },
  { t: 0.26, x: 510, y: 215 },
  { t: 0.29, x: 490, y: 245 },
  { t: 0.32, x: 475, y: 270 },
  { t: 0.35, x: 435, y: 245 },

  // 3. Collar, Shirt & Blazer Lapels (0.35 -> 0.50)
  { t: 0.38, x: 430, y: 310 },
  { t: 0.41, x: 460, y: 370 },
  { t: 0.44, x: 380, y: 390 },
  { t: 0.47, x: 300, y: 350 },
  { t: 0.50, x: 230, y: 440 },

  // 4. Blazer Body & Left Arm (0.50 -> 0.65)
  { t: 0.53, x: 190, y: 560 },
  { t: 0.56, x: 230, y: 680 },
  { t: 0.59, x: 320, y: 700 },
  { t: 0.62, x: 430, y: 650 },
  { t: 0.65, x: 520, y: 660 },

  // 5. Laptop & Hands Typing (0.65 -> 0.78)
  { t: 0.68, x: 670, y: 535 },
  { t: 0.71, x: 840, y: 525 },
  { t: 0.74, x: 790, y: 720 },
  { t: 0.76, x: 610, y: 730 },
  { t: 0.78, x: 510, y: 700 },

  // 6. Crossed Legs & Trousers (0.78 -> 0.90)
  { t: 0.81, x: 350, y: 760 },
  { t: 0.84, x: 440, y: 880 },
  { t: 0.87, x: 670, y: 860 },
  { t: 0.90, x: 810, y: 860 },

  // 7. Ground Baseline Stroke (0.90 -> 1.00)
  { t: 0.92, x: 80,  y: 932 },
  { t: 0.95, x: 450, y: 932 },
  { t: 0.98, x: 850, y: 932 },
  { t: 1.00, x: 950, y: 932 },
];

function interpolatePoint(progress) {
  const p = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < SKETCH_KEYPOINTS.length - 1; i++) {
    const k1 = SKETCH_KEYPOINTS[i];
    const k2 = SKETCH_KEYPOINTS[i + 1];
    if (p >= k1.t && p <= k2.t) {
      const span = k2.t - k1.t;
      const localU = span > 0 ? (p - k1.t) / span : 0;
      // Smooth Hermite interpolation
      const s = localU * localU * (3 - 2 * localU);
      return {
        x: k1.x + (k2.x - k1.x) * s,
        y: k1.y + (k2.y - k1.y) * s,
      };
    }
  }
  const last = SKETCH_KEYPOINTS[SKETCH_KEYPOINTS.length - 1];
  return { x: last.x, y: last.y };
}

export default function PencilSketch({
  imageSrc = "/abirullah-hero.jpg",
  duration = 10000, // 10 seconds total
  onComplete,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [pencilPos, setPencilPos] = useState({ x: 44, y: 15, angle: -38, visible: false, lifting: false });
  const [isFinished, setIsFinished] = useState(false);

  // Setup offscreen canvas and animate
  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = 1000;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.src = imageSrc;

    let animId = null;
    let startTime = null;

    // Create offscreen mask canvas
    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext("2d");
    maskCtx.fillStyle = "#000000";
    maskCtx.fillRect(0, 0, width, height);

    setIsFinished(false);
    setPencilPos((prev) => ({ ...prev, visible: true, lifting: false }));

    const drawFrame = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Interpolate current artist target point
      const pt = interpolatePoint(progress);

      // Add realistic sketching jitter
      const freq = elapsed * 0.045;
      const jx = Math.sin(freq * 1.7) * 3.5 + Math.sin(freq * 3.1) * 1.5;
      const jy = Math.cos(freq * 1.9) * 3.5 + Math.cos(freq * 2.7) * 1.5;
      const tipX = pt.x + jx;
      const tipY = pt.y + jy;

      // Update mask canvas: reveal circular patch around the pencil tip
      maskCtx.save();
      maskCtx.globalCompositeOperation = "destination-out";
      const rad = 75;
      const grad = maskCtx.createRadialGradient(tipX, tipY, 0, tipX, tipY, rad);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.7, "rgba(0,0,0,0.85)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      maskCtx.fillStyle = grad;
      maskCtx.beginPath();
      maskCtx.arc(tipX, tipY, rad, 0, Math.PI * 2);
      maskCtx.fill();

      // Progressive macro reveal sweep following the progress
      if (progress > 0) {
        const sweepY = progress * 960;
        maskCtx.fillStyle = "rgba(0,0,0,0.3)";
        maskCtx.fillRect(0, 0, width, sweepY);
      }
      maskCtx.restore();

      // Render to main visible canvas
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      if (img.complete && img.naturalWidth > 0) {
        // Draw the image masked
        ctx.save();
        ctx.drawImage(img, 0, 0, width, height);

        // Apply remaining black mask to hide unsketched parts
        ctx.drawImage(maskCanvas, 0, 0);

        // Active graphite pencil hatching lines around the tip
        if (progress < 1) {
          ctx.strokeStyle = "rgba(35, 35, 35, 0.75)";
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            const ox = Math.sin(freq + i * 1.8) * 10;
            const oy = Math.cos(freq * 1.3 + i * 1.5) * 8;
            ctx.moveTo(tipX + ox - 5, tipY + oy - 4);
            ctx.lineTo(tipX + ox + 5, tipY + oy + 4);
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // Update pencil position in percentage (responsive to container)
      const pctX = (tipX / width) * 100;
      const pctY = (tipY / height) * 100;
      const angle = -38 + Math.sin(freq * 2.5) * 4.5;

      setPencilPos({
        x: pctX,
        y: pctY,
        angle,
        visible: true,
        lifting: progress >= 0.98,
      });

      if (progress < 1) {
        animId = requestAnimationFrame(drawFrame);
      } else {
        // Complete!
        // Guarantee 100% full clean image displayed
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        setIsFinished(true);

        // Lift and fade pencil out
        setTimeout(() => {
          setPencilPos((prev) => ({ ...prev, visible: false }));
          if (onComplete) onComplete();
        }, 600);
      }
    };

    img.onload = () => {
      animId = requestAnimationFrame(drawFrame);
    };

    if (img.complete) {
      animId = requestAnimationFrame(drawFrame);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [imageSrc, duration, onComplete]);

  useEffect(() => {
    const cancel = startAnimation();
    return () => {
      if (cancel) cancel();
    };
  }, [startAnimation]);

  return (
    <div ref={containerRef} className={styles.sketchContainer}>
      {/* 2D Canvas where the sketch appears */}
      <canvas ref={canvasRef} className={styles.sketchCanvas} />

      {/* Pristine final image overlay when finished */}
      {isFinished && (
        <img
          src={imageSrc}
          alt="Abirullah - Full Stack Developer illustration"
          className={styles.finalImg}
        />
      )}

      {/* Realistic Technical Pencil */}
      {pencilPos.visible && (
        <div
          className={`${styles.pencilHolder} ${pencilPos.lifting ? styles.pencilLifting : ""}`}
          style={{
            left: `${pencilPos.x}%`,
            top: `${pencilPos.y}%`,
            transform: `rotate(${pencilPos.angle}deg)`,
          }}
        >
          <svg
            width="64"
            height="22"
            viewBox="0 0 64 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.pencilSvg}
          >
            {/* Lead tip touching (0, 11) */}
            <polygon points="0,11 10,7 10,15" fill="#18181b" />
            {/* Sharpened cedar wood cone */}
            <polygon points="10,7 22,4 22,18 10,15" fill="#e2b988" />
            {/* Wood facet shading */}
            <polygon points="10,7 22,4 22,9 10,11" fill="#deb887" />
            <polygon points="10,11 22,9 22,13 10,11" fill="#cfa574" />
            <polygon points="10,11 22,13 22,18 10,15" fill="#b88f5f" />
            {/* Yellow Hexagonal Pencil Body */}
            <rect x="22" y="4" width="32" height="4.5" fill="#fbbf24" />
            <rect x="22" y="8.5" width="32" height="5" fill="#f59e0b" />
            <rect x="22" y="13.5" width="32" height="4.5" fill="#d97706" />
            {/* Gold imprint stripe */}
            <line x1="22" y1="8.5" x2="54" y2="8.5" stroke="#fef08a" strokeWidth="0.8" />
            {/* Silver Metal Ferrule */}
            <rect x="54" y="4" width="5" height="14" fill="#9ca3af" />
            <line x1="56.5" y1="4" x2="56.5" y2="18" stroke="#4b5563" strokeWidth="0.8" />
            {/* Pink Eraser */}
            <rect x="59" y="4" width="5" height="14" rx="2" fill="#f43f5e" />
          </svg>
        </div>
      )}
    </div>
  );
}
