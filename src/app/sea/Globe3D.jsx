import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./SeaJourney.module.css";

const SECTION_THEME = {
  home: {
    color: "#5beaff",
    angle: 0,
    title: "Surface",
    text: "Intro and identity",
    dx: "-24vw",
    dy: "-18vh",
  },
  about: {
    color: "#ffd76b",
    angle: Math.PI / 2,
    title: "About",
    text: "Skills and profile",
    dx: "24vw",
    dy: "-18vh",
  },
  projects: {
    color: "#ff8ed1",
    angle: Math.PI,
    title: "Projects",
    text: "Priority builds",
    dx: "24vw",
    dy: "22vh",
  },
  contact: {
    color: "#9cc3ff",
    angle: (Math.PI * 3) / 2,
    title: "Contact",
    text: "Get in touch",
    dx: "-24vw",
    dy: "22vh",
  },
};

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function latLonToXY(lat, lon, width, height) {
  return {
    x: ((lon + 180) / 360) * width,
    y: ((90 - lat) / 180) * height,
  };
}

function drawLandPolygon(ctx, points, width, height) {
  if (!points.length) return;
  ctx.beginPath();
  for (let index = 0; index < points.length; index += 1) {
    const [lat, lon] = points[index];
    const { x, y } = latLonToXY(lat, lon, width, height);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function createEarthTexture() {
  const canvas = document.createElement("canvas");
  const width = 2048;
  const height = 1024;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const oceanGradient = ctx.createLinearGradient(0, 0, 0, height);
  oceanGradient.addColorStop(0, "#0f3762");
  oceanGradient.addColorStop(0.45, "#1b5a8a");
  oceanGradient.addColorStop(1, "#0b2447");
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "#9bd6ff";
  ctx.lineWidth = 1;
  for (let lat = -60; lat <= 60; lat += 15) {
    const y = latLonToXY(lat, 0, width, height).y;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let lon = -180; lon <= 180; lon += 20) {
    const x = latLonToXY(0, lon, width, height).x;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  ctx.restore();

  const landPolygons = [
    [[72, -168], [60, -152], [50, -130], [54, -104], [50, -84], [33, -80], [18, -95], [15, -114], [27, -134], [43, -144], [60, -162]],
    [[11, -82], [3, -79], [-8, -76], [-20, -72], [-34, -66], [-55, -62], [-37, -50], [-18, -46], [-2, -52], [9, -63]],
    [[82, -73], [76, -18], [66, -20], [60, -45], [67, -63], [75, -72]],
    [[70, -10], [70, 35], [64, 65], [62, 95], [58, 128], [48, 148], [35, 140], [20, 118], [8, 100], [10, 76], [18, 56], [30, 36], [42, 22], [55, 7], [65, -4]],
    [[36, -17], [31, 6], [26, 20], [14, 31], [2, 36], [-10, 34], [-22, 28], [-33, 17], [-35, 6], [-28, -4], [-14, -10], [1, -12], [18, -14], [31, -10]],
    [[-10, 112], [-20, 114], [-31, 116], [-39, 127], [-39, 143], [-31, 152], [-21, 148], [-13, 140], [-11, 129]],
    [[59, -10], [59, 2], [50, 3], [50, -7]],
    [[-74, -180], [-70, -120], [-73, -60], [-71, 0], [-74, 60], [-70, 120], [-74, 180], [-84, 180], [-84, -180]],
  ];

  ctx.fillStyle = "#3f8d4a";
  ctx.strokeStyle = "#a5dba9";
  ctx.lineWidth = 2;
  landPolygons.forEach((poly) => drawLandPolygon(ctx, poly, width, height));

  ctx.save();
  ctx.globalAlpha = 0.14;
  for (let index = 0; index < 1200; index += 1) {
    const x = randomRange(0, width);
    const y = randomRange(0, height);
    const r = randomRange(0.7, 2.2);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  return new THREE.CanvasTexture(canvas);
}

function createCloudTexture() {
  const canvas = document.createElement("canvas");
  const width = 2048;
  const height = 1024;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, width, height);
  for (let index = 0; index < 2600; index += 1) {
    const x = randomRange(0, width);
    const y = randomRange(0, height);
    const radius = randomRange(8, 26);
    const alpha = randomRange(0.03, 0.16);
    const grad = ctx.createRadialGradient(x, y, radius * 0.15, x, y, radius);
    grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

function disposeObject3D(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (Array.isArray(child.material)) {
      child.material.forEach((material) => material.dispose());
    } else if (child.material) {
      child.material.dispose();
    }
  });
}

export default function Globe3D({ progressRef, currentSection = "home", className = "" }) {
  const hostRef = useRef(null);
  const sectionPulseRef = useRef(0);
  const sectionRef = useRef(currentSection in SECTION_THEME ? currentSection : "home");
  const [cardPulse, setCardPulse] = useState(0);

  useEffect(() => {
    sectionRef.current = currentSection in SECTION_THEME ? currentSection : "home";
    sectionPulseRef.current += 1;
    setCardPulse((value) => value + 1);
  }, [currentSection]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(Math.max(host.clientWidth, 1), Math.max(host.clientHeight, 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.className = styles.globeCanvas;
    host.appendChild(renderer.domElement);

    const earthTexture = createEarthTexture();
    const cloudTexture = createCloudTexture();
    if (earthTexture) {
      earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      earthTexture.colorSpace = THREE.SRGBColorSpace;
    }
    if (cloudTexture) {
      cloudTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      cloudTexture.colorSpace = THREE.SRGBColorSpace;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      46,
      Math.max(host.clientWidth, 1) / Math.max(host.clientHeight, 1),
      0.1,
      120
    );
    camera.position.set(0, 0.2, 8.8);

    const globeRoot = new THREE.Group();
    scene.add(globeRoot);

    const ambientLight = new THREE.AmbientLight(0x84ddff, 0.34);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x68deff, 1.5, 60, 2);
    keyLight.position.set(6, 4.2, 9);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xffcc85, 0.95, 55, 2);
    rimLight.position.set(-8, -5, -7);
    scene.add(rimLight);

    const hemi = new THREE.HemisphereLight(0x8fe8ff, 0x020610, 0.36);
    scene.add(hemi);

    const globeMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture ?? null,
      roughness: 0.82,
      metalness: 0.08,
      bumpMap: earthTexture ?? null,
      bumpScale: 0.08,
      emissive: new THREE.Color("#19355b"),
      emissiveIntensity: 0.22,
    });

    const globeMesh = new THREE.Mesh(new THREE.SphereGeometry(2.08, 96, 96), globeMaterial);
    globeRoot.add(globeMesh);

    const cloudMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.16, 64, 64),
      new THREE.MeshPhongMaterial({
        map: cloudTexture ?? null,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    globeRoot.add(cloudMesh);

    const wireMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.12, 44, 44),
      new THREE.MeshBasicMaterial({
        color: 0x8ad7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.045,
      })
    );
    globeRoot.add(wireMesh);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.42, 72, 72),
      new THREE.MeshBasicMaterial({
        color: 0x74ddff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    globeRoot.add(atmosphere);

    const markerGroup = new THREE.Group();
    globeRoot.add(markerGroup);

    const sectionEntries = Object.entries(SECTION_THEME);
    const markerMap = {};

    sectionEntries.forEach(([key, section], index) => {
      const angle = (index / sectionEntries.length) * Math.PI * 2;
      const markerPosition = new THREE.Vector3(
        Math.cos(angle) * 2.42,
        Math.sin(angle * 1.7) * 0.34,
        Math.sin(angle) * 2.42
      );

      const markerMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(section.color),
        emissive: new THREE.Color(section.color),
        emissiveIntensity: key === sectionRef.current ? 1.7 : 0.65,
        roughness: 0.28,
        metalness: 0.12,
      });

      const marker = new THREE.Mesh(new THREE.SphereGeometry(0.13, 26, 26), markerMaterial);
      marker.position.copy(markerPosition);
      markerGroup.add(marker);
      markerMap[key] = marker;
    });

    const spaceCount = 900;
    const spacePos = new Float32Array(spaceCount * 3);
    const spaceCol = new Float32Array(spaceCount * 3);
    for (let index = 0; index < spaceCount; index += 1) {
      const i3 = index * 3;
      const radius = randomRange(11, 32);
      const theta = randomRange(0, Math.PI * 2);
      const phi = Math.acos(randomRange(-1, 1));
      spacePos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      spacePos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      spacePos[i3 + 2] = radius * Math.cos(phi);
      const tint = randomRange(0.68, 1);
      spaceCol[i3] = tint;
      spaceCol[i3 + 1] = tint;
      spaceCol[i3 + 2] = 1;
    }
    const spaceGeometry = new THREE.BufferGeometry();
    spaceGeometry.setAttribute("position", new THREE.BufferAttribute(spacePos, 3));
    spaceGeometry.setAttribute("color", new THREE.BufferAttribute(spaceCol, 3));
    const spaceField = new THREE.Points(
      spaceGeometry,
      new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(spaceField);

    const shellCount = 760;
    const shellBase = new Float32Array(shellCount * 3);
    const shellPos = new Float32Array(shellCount * 3);
    const shellCol = new Float32Array(shellCount * 3);
    const shellSeed = new Float32Array(shellCount);
    for (let index = 0; index < shellCount; index += 1) {
      const i3 = index * 3;
      const radius = randomRange(2.8, 4.9);
      const theta = randomRange(0, Math.PI * 2);
      const phi = Math.acos(randomRange(-1, 1));
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      shellBase[i3] = x;
      shellBase[i3 + 1] = y;
      shellBase[i3 + 2] = z;
      shellPos[i3] = x;
      shellPos[i3 + 1] = y;
      shellPos[i3 + 2] = z;
      shellSeed[index] = randomRange(0, Math.PI * 2);
      const colorPick = Math.random();
      if (colorPick < 0.34) {
        shellCol[i3] = 0.42;
        shellCol[i3 + 1] = 0.86;
        shellCol[i3 + 2] = 1;
      } else if (colorPick < 0.68) {
        shellCol[i3] = 1;
        shellCol[i3 + 1] = 0.84;
        shellCol[i3 + 2] = 0.48;
      } else {
        shellCol[i3] = 1;
        shellCol[i3 + 1] = 0.61;
        shellCol[i3 + 2] = 0.86;
      }
    }
    const shellGeometry = new THREE.BufferGeometry();
    shellGeometry.setAttribute("position", new THREE.BufferAttribute(shellPos, 3));
    shellGeometry.setAttribute("color", new THREE.BufferAttribute(shellCol, 3));
    const shellField = new THREE.Points(
      shellGeometry,
      new THREE.PointsMaterial({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    globeRoot.add(shellField);

    const sparkCount = 260;
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkCol = new Float32Array(sparkCount * 3);
    const sparkLife = new Float32Array(sparkCount);
    const sparkVel = Array.from({ length: sparkCount }, () => new THREE.Vector3());
    for (let index = 0; index < sparkCount; index += 1) {
      const i3 = index * 3;
      sparkPos[i3] = 9999;
      sparkPos[i3 + 1] = 9999;
      sparkPos[i3 + 2] = 9999;
      sparkCol[i3] = 1;
      sparkCol[i3 + 1] = 1;
      sparkCol[i3 + 2] = 1;
    }
    const sparkGeometry = new THREE.BufferGeometry();
    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
    sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkCol, 3));
    const sparkField = new THREE.Points(
      sparkGeometry,
      new THREE.PointsMaterial({
        size: 0.09,
        vertexColors: true,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(sparkField);

    const burstOrigin = new THREE.Vector3();
    const targetColor = new THREE.Color(SECTION_THEME.home.color);
    const currentColor = new THREE.Color(SECTION_THEME.home.color);

    function emitBurst(sectionKey) {
      const marker = markerMap[sectionKey];
      if (marker) burstOrigin.copy(marker.position);
      else burstOrigin.set(0, 0, 2.2);

      const tint = new THREE.Color(SECTION_THEME[sectionKey]?.color || "#7fe6ff");
      for (let index = 0; index < sparkCount; index += 1) {
        const i3 = index * 3;
        sparkPos[i3] = burstOrigin.x;
        sparkPos[i3 + 1] = burstOrigin.y;
        sparkPos[i3 + 2] = burstOrigin.z;

        const direction = new THREE.Vector3(randomRange(-1, 1), randomRange(-1, 1), randomRange(-1, 1)).normalize();
        const speed = randomRange(0.05, 0.23);
        sparkVel[index].copy(direction.multiplyScalar(speed));
        sparkLife[index] = randomRange(0.7, 1.08);

        sparkCol[i3] = tint.r;
        sparkCol[i3 + 1] = Math.min(1, tint.g + randomRange(0, 0.2));
        sparkCol[i3 + 2] = Math.min(1, tint.b + randomRange(0.02, 0.32));
      }
      sparkGeometry.attributes.position.needsUpdate = true;
      sparkGeometry.attributes.color.needsUpdate = true;
    }

    emitBurst(sectionRef.current);

    let rafId = 0;
    let previousTime = performance.now();
    let lastPulse = sectionPulseRef.current;
    let spinY = 0;
    let smoothedProgress = 0;
    let shellDrift = 0;

    function renderFrame(now) {
      const dt = Math.min(0.05, (now - previousTime) / 1000);
      previousTime = now;

      const section = sectionRef.current in SECTION_THEME ? sectionRef.current : "home";
      const rawProgress = clamp01(progressRef?.current ?? 0);
      smoothedProgress = THREE.MathUtils.damp(smoothedProgress, rawProgress, 4.6, dt);

      if (sectionPulseRef.current !== lastPulse) {
        emitBurst(section);
        lastPulse = sectionPulseRef.current;
      }

      const targetAngle = smoothedProgress * Math.PI * 6.8 + SECTION_THEME[section].angle * 0.12;
      spinY = THREE.MathUtils.damp(spinY, targetAngle, 2.9, dt);
      globeRoot.rotation.y = spinY;
      globeRoot.rotation.x = Math.sin(now * 0.00025) * 0.08 + smoothedProgress * 0.06;
      globeRoot.position.y = Math.sin(now * 0.00068) * 0.18;
      globeRoot.rotation.z = -0.18;

      targetColor.set(SECTION_THEME[section].color);
      currentColor.lerp(targetColor, Math.min(1, dt * 2.8));
      globeMaterial.emissive.copy(currentColor);
      globeMaterial.emissiveIntensity = 0.16 + smoothedProgress * 0.22;

      atmosphere.material.color.copy(currentColor);
      atmosphere.material.opacity = 0.16 + smoothedProgress * 0.1;

      wireMesh.rotation.y -= dt * 0.08;
      wireMesh.rotation.x += dt * 0.06;
      cloudMesh.rotation.y += dt * 0.032;
      cloudMesh.rotation.x += dt * 0.004;

      Object.entries(markerMap).forEach(([key, marker]) => {
        const active = key === section;
        const targetScale = active ? 1.28 + Math.sin(now * 0.01) * 0.09 : 1;
        const scale = THREE.MathUtils.damp(marker.scale.x, targetScale, 8, dt);
        marker.scale.setScalar(scale);
        marker.material.emissiveIntensity = THREE.MathUtils.damp(
          marker.material.emissiveIntensity,
          active ? 2.0 : 0.55,
          8,
          dt
        );
      });

      shellDrift += dt * (0.35 + smoothedProgress * 0.65);
      for (let index = 0; index < shellCount; index += 1) {
        const i3 = index * 3;
        const seed = shellSeed[index];
        const pulse = 1 + Math.sin(now * 0.0014 + seed) * 0.04 + smoothedProgress * 0.15;
        shellPos[i3] = shellBase[i3] * pulse + Math.cos(shellDrift + seed) * 0.08;
        shellPos[i3 + 1] = shellBase[i3 + 1] * pulse + Math.sin(shellDrift * 0.9 + seed * 0.7) * 0.08;
        shellPos[i3 + 2] = shellBase[i3 + 2] * pulse + Math.sin(shellDrift + seed * 1.1) * 0.08;
      }
      shellGeometry.attributes.position.needsUpdate = true;

      for (let index = 0; index < sparkCount; index += 1) {
        const life = sparkLife[index];
        if (life <= 0) continue;

        const i3 = index * 3;
        sparkPos[i3] += sparkVel[index].x * (1 + smoothedProgress * 0.9);
        sparkPos[i3 + 1] += sparkVel[index].y * (1 + smoothedProgress * 0.9);
        sparkPos[i3 + 2] += sparkVel[index].z * (1 + smoothedProgress * 0.9);
        sparkVel[index].multiplyScalar(0.985);

        sparkLife[index] = life - dt * 1.6;
        const alpha = clamp01(sparkLife[index]);
        sparkCol[i3] *= 0.997;
        sparkCol[i3 + 1] *= 0.998;
        sparkCol[i3 + 2] *= 0.999;
        if (sparkLife[index] <= 0) {
          sparkPos[i3] = 9999;
          sparkPos[i3 + 1] = 9999;
          sparkPos[i3 + 2] = 9999;
        } else {
          sparkCol[i3] = Math.max(0.14, sparkCol[i3] * alpha);
          sparkCol[i3 + 1] = Math.max(0.22, sparkCol[i3 + 1] * alpha);
          sparkCol[i3 + 2] = Math.max(0.3, sparkCol[i3 + 2] * alpha);
        }
      }
      sparkGeometry.attributes.position.needsUpdate = true;
      sparkGeometry.attributes.color.needsUpdate = true;

      spaceField.rotation.y += dt * 0.018;
      spaceField.rotation.x = Math.sin(now * 0.00011) * 0.08;

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(renderFrame);
    }

    function onResize() {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", onResize, { passive: true });
    rafId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);

      disposeObject3D(scene);
      renderer.dispose();
      earthTexture?.dispose();
      cloudTexture?.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [progressRef]);

  const wrapperClassName = [styles.globeRoot, className].filter(Boolean).join(" ");
  const activeSection = SECTION_THEME[currentSection] || SECTION_THEME.home;

  return (
    <div className={wrapperClassName}>
      <div ref={hostRef} className={styles.globeCanvasHost} aria-hidden="true" />
      <div className={styles.globeGlow} aria-hidden="true" />
      <div className={styles.globeInfoLayer} aria-hidden="true">
        <span className={styles.globePulseCore} />
        <article
          key={`${currentSection}-${cardPulse}`}
          className={`${styles.globeInfoCard} ${styles.globeInfoCardActive}`}
          style={{
            "--dx": activeSection.dx,
            "--dy": activeSection.dy,
          }}
        >
          <h4 className={styles.globeInfoCardTitle}>{activeSection.title}</h4>
          <p className={styles.globeInfoCardText}>{activeSection.text}</p>
        </article>
        <div className={styles.globeScrollTag}>Scroll to rotate globe</div>
      </div>
    </div>
  );
}
