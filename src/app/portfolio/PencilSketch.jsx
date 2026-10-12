import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./PencilSketch.module.css";

// Exact pixel waypoints (0..1024) tracing each feature in abirullah-hero.png
const ARTIST_PATH = [
  // --- 1. Hair Silhouette & Curls (t: 0.00 -> 0.16) ---
  { t: 0.00, x: 420, y: 130, type: "stroke", rad: 36 }, // Hair apex start
  { t: 0.02, x: 460, y: 135, type: "stroke", rad: 36 }, // Crown curve
  { t: 0.04, x: 508, y: 140, type: "stroke", rad: 40 }, // Right crown
  { t: 0.06, x: 538, y: 160, type: "stroke", rad: 40 }, // Upper right hair wave
  { t: 0.08, x: 550, y: 190, type: "shading", rad: 50 }, // Hair right bulk
  { t: 0.10, x: 480, y: 175, type: "shading", rad: 50 }, // Inner hair texture
  { t: 0.12, x: 400, y: 155, type: "shading", rad: 45 }, // Front hair tuft
  { t: 0.14, x: 350, y: 175, type: "stroke", rad: 38 }, // Left hair curve
  { t: 0.16, x: 344, y: 235, type: "stroke", rad: 36 }, // Temple & sideburn

  // --- 2. Facial Features & Beard Stubble (t: 0.16 -> 0.32) ---
  { t: 0.18, x: 348, y: 260, type: "stroke", rad: 34 }, // Left ear
  { t: 0.20, x: 430, y: 230, type: "detail", rad: 30 }, // Left eyebrow
  { t: 0.22, x: 445, y: 255, type: "detail", rad: 28 }, // Left eye
  { t: 0.24, x: 475, y: 245, type: "detail", rad: 30 }, // Right eyebrow
  { t: 0.26, x: 480, y: 257, type: "detail", rad: 28 }, // Right eye
  { t: 0.28, x: 470, y: 275, type: "detail", rad: 28 }, // Nose bridge
  { t: 0.29, x: 475, y: 298, type: "detail", rad: 30 }, // Nose tip
  { t: 0.30, x: 472, y: 322, type: "detail", rad: 30 }, // Mouth line
  { t: 0.31, x: 445, y: 345, type: "shading", rad: 44 }, // Stubble beard
  { t: 0.32, x: 439, y: 360, type: "stroke", rad: 35 }, // Chin & jawline

  // --- 3. Neck & Collared Shirt (t: 0.32 -> 0.40) ---
  { t: 0.34, x: 360, y: 365, type: "stroke", rad: 36 }, // Neck contour
  { t: 0.36, x: 364, y: 400, type: "stroke", rad: 38 }, // Left collar point
  { t: 0.38, x: 440, y: 400, type: "stroke", rad: 38 }, // Right collar point
  { t: 0.40, x: 428, y: 520, type: "stroke", rad: 40 }, // Shirt front placket

  // --- 4. Left Blazer & Outer Arm (t: 0.40 -> 0.60) ---
  { t: 0.42, x: 345, y: 345, type: "stroke", rad: 42 }, // Left shoulder seam
  { t: 0.44, x: 279, y: 380, type: "stroke", rad: 45 }, // Shoulder slope
  { t: 0.46, x: 213, y: 420, type: "stroke", rad: 48 }, // Upper outer arm
  { t: 0.48, x: 187, y: 500, type: "stroke", rad: 50 }, // Bicep / tricep
  { t: 0.50, x: 158, y: 640, type: "stroke", rad: 52 }, // Left elbow
  { t: 0.52, x: 171, y: 720, type: "stroke", rad: 50 }, // Forearm crease
  { t: 0.54, x: 280, y: 690, type: "stroke", rad: 48 }, // Inner sleeve line
  { t: 0.56, x: 350, y: 420, type: "stroke", rad: 45 }, // Left lapel edge
  { t: 0.58, x: 280, y: 540, type: "shading", rad: 65 }, // Dark blazer body fill
  { t: 0.60, x: 230, y: 760, type: "stroke", rad: 55 }, // Jacket lower flap

  // --- 5. Right Shoulder, Arm & Typing Hands (t: 0.60 -> 0.74) ---
  { t: 0.62, x: 455, y: 380, type: "stroke", rad: 45 }, // Right shoulder
  { t: 0.64, x: 525, y: 420, type: "stroke", rad: 46 }, // Right back shoulder
  { t: 0.66, x: 550, y: 550, type: "stroke", rad: 48 }, // Right sleeve
  { t: 0.68, x: 460, y: 660, type: "detail", rad: 34 }, // Left hand fingers
  { t: 0.70, x: 510, y: 665, type: "detail", rad: 34 }, // Fingers on keys
  { t: 0.72, x: 560, y: 655, type: "detail", rad: 34 }, // Right hand typing
  { t: 0.74, x: 580, y: 640, type: "detail", rad: 36 }, // Right wrist

  // --- 6. Laptop Screen, Logo & Keyboard (t: 0.74 -> 0.85) ---
  { t: 0.76, x: 503, y: 720, type: "stroke", rad: 40 }, // Keyboard tray front
  { t: 0.78, x: 618, y: 720, type: "stroke", rad: 40 }, // Laptop hinge
  { t: 0.80, x: 687, y: 550, type: "stroke", rad: 42 }, // Screen top-left corner
  { t: 0.82, x: 884, y: 538, type: "stroke", rad: 42 }, // Screen top-right corner
  { t: 0.83, x: 840, y: 700, type: "stroke", rad: 42 }, // Screen bottom-right corner
  { t: 0.84, x: 757, y: 640, type: "detail", rad: 36 }, // Laptop center logo
  { t: 0.85, x: 615, y: 730, type: "stroke", rad: 38 }, // Trackpad base

  // --- 7. Crossed Legs, Trousers & Shoes (t: 0.85 -> 0.94) ---
  { t: 0.87, x: 350, y: 740, type: "stroke", rad: 46 }, // Left thigh fold
  { t: 0.89, x: 440, y: 800, type: "stroke", rad: 46 }, // Trouser fold
  { t: 0.90, x: 510, y: 890, type: "stroke", rad: 50 }, // Left sneaker
  { t: 0.91, x: 750, y: 730, type: "stroke", rad: 48 }, // Right crossed thigh
  { t: 0.92, x: 862, y: 730, type: "stroke", rad: 48 }, // Right knee outer curve
  { t: 0.93, x: 848, y: 800, type: "stroke", rad: 48 }, // Right lower leg
  { t: 0.94, x: 800, y: 880, type: "shading", rad: 55 }, // Right black shoe

  // --- 8. Ground Baseline Stroke (t: 0.94 -> 1.00) ---
  { t: 0.95, x: 74,  y: 928, type: "stroke", rad: 38 }, // Ground line far left
  { t: 0.97, x: 460, y: 928, type: "stroke", rad: 38 }, // Ground line mid
  { t: 0.99, x: 820, y: 928, type: "stroke", rad: 38 }, // Ground line under shoes
  { t: 1.00, x: 950, y: 928, type: "stroke", rad: 38 }, // Ground line far right end
];

function interpolateArtist(progress) {
  const p = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < ARTIST_PATH.length - 1; i++) {
    const k1 = ARTIST_PATH[i];
    const k2 = ARTIST_PATH[i + 1];
    if (p >= k1.t && p <= k2.t) {
      const span = k2.t - k1.t;
      const localU = span > 0 ? (p - k1.t) / span : 0;
      // Smooth Hermite S-curve
      const s = localU * localU * (3 - 2 * localU);
      return {
        x: k1.x + (k2.x - k1.x) * s,
        y: k1.y + (k2.y - k1.y) * s,
        type: k1.type,
        rad: k1.rad + (k2.rad - k1.rad) * s,
      };
    }
  }
  const last = ARTIST_PATH[ARTIST_PATH.length - 1];
  return { x: last.x, y: last.y, type: last.type, rad: last.rad };
}

export default function PencilSketch({
  imageSrc = "/abirullah-hero.png",
  duration = 10000, // 10 seconds synchronized with letter bounce
  onComplete,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [pencilPos, setPencilPos] = useState({
    x: (420 / 1024) * 100,
    y: (130 / 1024) * 100,
    angle: -38,
    visible: true,
    lifting: false,
  });
  const [isFinished, setIsFinished] = useState(false);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = 1024;
    const height = 1024;
    canvas.width = width;
    canvas.height = height;

    // Canvas background is 100% pure white paper from the start
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const img = new Image();
    img.src = imageSrc;

    let animId = null;
    let startTime = null;

    // Offscreen 1: Reveal Mask (starts completely empty, accumulates drawing paths)
    const revealCanvas = document.createElement("canvas");
    revealCanvas.width = width;
    revealCanvas.height = height;
    const revealCtx = revealCanvas.getContext("2d");
    revealCtx.clearRect(0, 0, width, height);

    // Offscreen 2: Layer compositor for image masking
    const layerCanvas = document.createElement("canvas");
    layerCanvas.width = width;
    layerCanvas.height = height;
    const layerCtx = layerCanvas.getContext("2d");

    let lastTipX = 420;
    let lastTipY = 130;

    setIsFinished(false);
    setPencilPos({
      x: (420 / 1024) * 100,
      y: (130 / 1024) * 100,
      angle: -38,
      visible: true,
      lifting: false,
    });

    const drawFrame = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Current target point along the artist trajectory
      const pt = interpolateArtist(progress);

      // Realistic human hand motion & shading vibrations
      let jx = 0;
      let jy = 0;
      let angleOffset = 0;

      if (pt.type === "shading") {
        // Rapid back-and-forth shading strokes filling dark areas
        const freq = elapsed * 0.05;
        jx = Math.sin(freq * 2.2) * 4.0;
        jy = Math.cos(freq * 2.2) * 4.0;
        angleOffset = Math.sin(freq * 1.5) * 4.0;
      } else if (pt.type === "detail") {
        // High-precision stroke for delicate facial features & fingers
        const freq = elapsed * 0.025;
        jx = Math.sin(freq) * 0.8;
        jy = Math.cos(freq * 1.3) * 0.8;
      } else {
        // Smooth natural line drawing
        const freq = elapsed * 0.035;
        jx = Math.sin(freq * 1.6) * 1.6;
        jy = Math.cos(freq * 1.8) * 1.6;
        if (pt.y > 900) {
          // Horizontal ground line stroke
          angleOffset = 6.0;
        }
      }

      const tipX = pt.x + jx;
      const tipY = pt.y + jy;

      // 1. Paint onto the Reveal Mask: strictly at and along the pencil's stroke
      revealCtx.save();
      revealCtx.strokeStyle = "rgba(0, 0, 0, 1)";
      revealCtx.lineWidth = pt.rad * 1.4;
      revealCtx.lineCap = "round";
      revealCtx.lineJoin = "round";
      revealCtx.beginPath();
      revealCtx.moveTo(lastTipX, lastTipY);
      revealCtx.lineTo(tipX, tipY);
      revealCtx.stroke();

      // Soft circular gradient stamp under the active pencil lead tip
      const grad = revealCtx.createRadialGradient(
        tipX,
        tipY,
        0,
        tipX,
        tipY,
        pt.rad
      );
      grad.addColorStop(0, "rgba(0, 0, 0, 1)");
      grad.addColorStop(0.75, "rgba(0, 0, 0, 0.95)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      revealCtx.fillStyle = grad;
      revealCtx.beginPath();
      revealCtx.arc(tipX, tipY, pt.rad, 0, Math.PI * 2);
      revealCtx.fill();

      // Over the final ground line stroke (progress >= 0.96), smoothly complete any micro-gap
      if (progress >= 0.96) {
        const finalAlpha = Math.min(1, (progress - 0.96) / 0.04);
        revealCtx.fillStyle = `rgba(0, 0, 0, ${finalAlpha * 0.35})`;
        revealCtx.fillRect(0, 0, width, height);
      }
      revealCtx.restore();

      lastTipX = tipX;
      lastTipY = tipY;

      // 2. Render to visible Canvas: Pure white paper + masked ink
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      if (img.complete && img.naturalWidth > 0) {
        // Composite transparent PNG through the reveal mask
        layerCtx.clearRect(0, 0, width, height);
        layerCtx.drawImage(img, 0, 0, width, height);
        layerCtx.globalCompositeOperation = "destination-in";
        layerCtx.drawImage(revealCanvas, 0, 0);
        layerCtx.globalCompositeOperation = "source-over";

        // Draw revealed illustration directly onto pure white paper
        ctx.drawImage(layerCanvas, 0, 0);

        // 3. Active Graphite Hatching Lines right at the pencil lead tip
        if (progress < 0.99) {
          ctx.save();
          ctx.strokeStyle = "rgba(35, 35, 35, 0.75)";
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          const strokeCount = pt.type === "shading" ? 4 : 2;
          for (let i = 0; i < strokeCount; i++) {
            const ox = Math.sin(elapsed * 0.05 + i * 1.7) * 7;
            const oy = Math.cos(elapsed * 0.06 + i * 1.4) * 6;
            ctx.moveTo(tipX + ox - 4, tipY + oy - 3);
            ctx.lineTo(tipX + ox + 4, tipY + oy + 3);
          }
          ctx.stroke();
          ctx.restore();
        }
      }

      // 4. Update Pencil Tip Position in responsive percentage
      const pctX = (tipX / width) * 100;
      const pctY = (tipY / height) * 100;
      const baseAngle = -38;
      const angle = baseAngle + angleOffset;

      setPencilPos({
        x: pctX,
        y: pctY,
        angle,
        visible: true,
        lifting: progress >= 0.975,
      });

      if (progress < 1) {
        animId = requestAnimationFrame(drawFrame);
      } else {
        // Animation finished: show crisp full picture
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        setIsFinished(true);

        // Lift and fade pencil out
        setTimeout(() => {
          setPencilPos((prev) => ({ ...prev, visible: false }));
          if (onComplete) onComplete();
        }, 500);
      }
    };

    img.onload = () => {
      animId = requestAnimationFrame(drawFrame);
    };

    if (img.complete && img.naturalWidth > 0) {
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
      {/* 2D Canvas where the sketch appears on pure white paper */}
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
          className={`${styles.pencilHolder} ${
            pencilPos.lifting ? styles.pencilLifting : ""
          }`}
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
            <line
              x1="22"
              y1="8.5"
              x2="54"
              y2="8.5"
              stroke="#fef08a"
              strokeWidth="0.8"
            />
            {/* Silver Metal Ferrule */}
            <rect x="54" y="4" width="5" height="14" fill="#9ca3af" />
            <line
              x1="56.5"
              y1="4"
              x2="56.5"
              y2="18"
              stroke="#4b5563"
              strokeWidth="0.8"
            />
            {/* Pink Eraser */}
            <rect x="59" y="4" width="5" height="14" rx="2" fill="#f43f5e" />
          </svg>
        </div>
      )}
    </div>
  );
}
