import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import clsx from "clsx";

import DownloadButton from "../../common/components/DownloadButton/DownloadButton";
import IconButton from "../../common/components/IconButton/IconButton";
import InputField from "../../common/components/InputField/InputField";
import TextAreaField from "../../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../../common/components/SubmitButton/SubmitButton";
import Loader from "../../common/components/Loader/Loader";

import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiReactquery, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import Todo from "../../assets/images/Todolist.jpeg";
import GlobalShare from "../../assets/images/GlobalShare.png";
import Wather from "../../assets/images/watherapp.jpeg";
import SchoolMgmt from "../../assets/images/SchoolMgmt.svg";
import cv from "../../assets/files/MyResume2025.pdf";

import OceanCanvas from "./OceanCanvas";
import FishSprite from "./FishSprite";
import Titanic from "./Titanic";
import DeepNav from "./DeepNav";
import Globe3D from "./Globe3D";
import ColorThemePicker from "./ColorThemePicker";
import { THEME_WORLDS, buildThemePresentation, getPaletteById, getWorldById } from "./themeWorlds";
import styles from "./SeaJourney.module.css";

const skills = [
  { name: "HTML 5", icon: <AiFillHtml5 size="22px" color="white" />, cssName: "html" },
  { name: "CSS 3", icon: <BiLogoCss3 size="22px" color="white" />, cssName: "css" },
  { name: "JavaScript", icon: <BiLogoJavascript size="22px" color="white" />, cssName: "java-script" },
  { name: "TypeScript", icon: <SiTypescript size="22px" color="white" />, cssName: "type-script" },
  { name: "React", icon: <FaReact size="22px" color="white" />, cssName: "react" },
  { name: "Express", icon: <SiExpress size="22px" color="white" />, cssName: "express" },
  { name: "Bootstrap", icon: <BiLogoBootstrap size="22px" color="white" />, cssName: "redux" },
  { name: "Tailwind", icon: <BiLogoTailwindCss size="22px" color="white" />, cssName: "recoil" },
  { name: "React Query", icon: <SiReactquery size="22px" color="white" />, cssName: "react-query" },
  { name: "Responsive", icon: <FaMobileAlt size="22px" color="white" />, cssName: "responsive" },
  { name: "Git", icon: <BsGit size="22px" color="white" />, cssName: "git" },
  { name: "C++", icon: <TbBrandCpp size="22px" color="white" />, cssName: "cpp" },
  { name: "Problem Solving", icon: <BsPuzzle size="22px" color="white" />, cssName: "problem-solving" },
];

const projects = [
  {
    name: "School Management System",
    description:
      "Architected a full-stack educational platform handling student lifecycle management, attendance tracking, grade management, and admin dashboards. Engineered scalable microservices with MongoDB and Express, crafted responsive React interfaces that dynamically adapt to different user roles (admin, teacher, student). Currently powering real-world school operations with secure authentication and role-based access control.",
    image: SchoolMgmt,
    priority: true,
    featured: false,
    inProgress: true,
    hasDetails: true,
    frontendGithub: "https://github.com/abdul-samad-91/School_Management_System",
    backendGithub: "https://github.com/abdul-samad-91/School_Management_System_Server",
  },
  {
    name: "TaskMaster - Task Management App",
    link: "https://abirafriditaskmaster.vercel.app/",
    github: "https://github.com/Abirullah/To-dose-app",
    description:
      "Built an intuitive productivity powerhouse where users organize tasks, collaborate with teams, and leverage AI insights. Features include permission-based task sharing, real-time chat integration, submission tracking, and beautiful dark-mode UI that's actually enjoyable to use. Deployed on Vercel with blazing-fast load times and zero downtime.",
    image: Todo,
    priority: true,
    featured: true,
  },
  {
    name: "EchoTune - Music Streaming Platform",
    link: "https://echotuneapp.vercel.app/",
    github: "https://github.com/Abirullah/Music-Wed-FrontEnd",
    description:
      "Created a vibrant music discovery ecosystem where content creators upload tracks and listeners explore curated collections. Engineered a dual-role system with creator analytics, playlist curation, and seamless audio streaming. The UI celebrates music culture with gradient aesthetics and smooth interactions that feel like the platform understands your vibe.",
    image: GlobalShare,
    priority: true,
    featured: true,
  },
  {
    name: "Weather App",
    link: "https://Abirullah.github.io/React-wather-app",
    github: "https://github.com/Abirullah/React-wather-app",
    description:
      "Designed a clean, minimalist weather companion that integrates real-time API data to deliver accurate forecasts by city. Users get straightforward weather info without clutter, with responsive layouts that work beautifully on phones, tablets, and desktops. Sometimes simple is perfect.",
    image: Wather,
    priority: false,
  },
];

const education = [
  {
    school: "IM Sciences University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "Pursuing",
    description: "Building strong foundations in algorithms, data structures, and software engineering principles. Learning not just to code, but to think like a computer scientist.",
  },
  {
    school: "Hadaf Group of Colleges",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Computer Science",
    year: "Completed",
    description: "Developed analytical and problem-solving skills through intensive computer science, mathematics, and programming studies, laying the groundwork for technical excellence.",
  },
];

const experience = [
  {
    company: "Encova Solutions",
    title: "MEAN Stack Developer",
    period: "Present",
    highlights: [
      "Build responsive, pixel-perfect React interfaces that users genuinely enjoy",
      "Design and deploy scalable Node.js/Express APIs handling thousands of requests",
      "Architect MongoDB schemas for complex data relationships",
      "Improve app performance, optimize bundle sizes, and ensure accessibility standards",
      "Integrate third-party services (payments, auth, analytics)",
      "Mentor junior developers and establish best practices for component reusability",
    ],
  },
  {
    company: "Self Project",
    title: "MERN Stack Developer",
    period: "Ongoing",
    highlights: [
      "Built 4+ production-ready web applications showcasing MERN stack expertise",
      "Specialized in MERN stack (MongoDB, Express, React, Node.js) with focus on performance and user experience",
      "Managed full project lifecycle: requirements → design → development → deployment",
      "Architected REST APIs and integrated complex data workflows with modern patterns",
    ],
  },
];

const overlayFish = [
  { id: "fxFish1", variant: "cyan", dir: "l2r", y: "16vh", scale: 0.85, opacity: 0.26, dur: "22s", delay: "-6s", z: 2 },
  { id: "fxFish2", variant: "gold", dir: "r2l", y: "26vh", scale: 0.7, opacity: 0.22, dur: "28s", delay: "-18s", z: 1 },
  { id: "fxFish3", variant: "blue", dir: "l2r", y: "42vh", scale: 0.62, opacity: 0.18, dur: "34s", delay: "-22s", z: 1 },
  { id: "fxFish4", variant: "pink", dir: "r2l", y: "64vh", scale: 0.8, opacity: 0.2, dur: "24s", delay: "-12s", z: 2 },
  { id: "fxFish5", variant: "cyan", dir: "l2r", y: "78vh", scale: 0.72, opacity: 0.16, dur: "30s", delay: "-26s", z: 1 },
  { id: "fxFish6", variant: "gold", dir: "r2l", y: "84vh", scale: 0.58, opacity: 0.14, dur: "36s", delay: "-10s", z: 0 },
];

const overlayBubbles = [
  { id: "fxB1", x: "14vw", size: "10px", drift: "-18px", opacity: 0.22, dur: "12s", delay: "-4s" },
  { id: "fxB2", x: "24vw", size: "7px", drift: "12px", opacity: 0.18, dur: "10s", delay: "-8s" },
  { id: "fxB3", x: "36vw", size: "12px", drift: "-10px", opacity: 0.2, dur: "14s", delay: "-2s" },
  { id: "fxB4", x: "52vw", size: "8px", drift: "20px", opacity: 0.16, dur: "11s", delay: "-6s" },
  { id: "fxB5", x: "66vw", size: "14px", drift: "-22px", opacity: 0.2, dur: "16s", delay: "-10s" },
  { id: "fxB6", x: "78vw", size: "9px", drift: "14px", opacity: 0.18, dur: "13s", delay: "-12s" },
  { id: "fxB7", x: "88vw", size: "7px", drift: "-16px", opacity: 0.14, dur: "10s", delay: "-14s" },
  { id: "fxB8", x: "8vw", size: "6px", drift: "10px", opacity: 0.12, dur: "9s", delay: "-16s" },
];

const sectionGuideCopy = {
  sea: {
    about: "Glass reef panels and soft currents make the profile feel like it is suspended underwater.",
    projects: "Project cards drift like illuminated capsules between fish, bubbles, and blue light.",
    contact: "Send a message through the current and I will surface with a reply.",
    finale: "We finish the dive beside a deep-sea wreck and a quiet navigation dock.",
  },
  forest: {
    about: "The profile grows on tree decks, branches, and mossy platforms spread through the canopy.",
    projects: "Projects rest on timber platforms between trunks so each card feels built into the forest.",
    contact: "Drop a note at the woodland outpost and I will write back from the trail.",
    finale: "The final stop becomes a moonlit lookout between roots and lanterns.",
  },
  desert: {
    about: "The profile lands on cactus planks and low mesas with warm air and moving mirage light.",
    projects: "Projects sit on carved desert decks above dunes so the content feels anchored in the sand.",
    contact: "Leave a message at the canyon station and I will answer from the next ridge.",
    finale: "The ending scene becomes a mesa camp with dust, rails, and a quiet horizon.",
  },
  sky: {
    about: "The profile is lifted onto cloud decks so each section feels like it is carried by the wind.",
    projects: "Projects float on cloud islands with vapor trails and birds moving across the scene.",
    contact: "Leave a signal in the clouds and I will glide back with a reply.",
    finale: "The last section turns into a floating dock above the clouds.",
  },
  city: {
    about: "The profile is framed on neon billboards and rain glass panels above the avenue.",
    projects: "Projects stack into skyline displays with urban glow and moving traffic lines.",
    contact: "Send a note through the night grid and I will answer from the city lights.",
    finale: "The final stop becomes a rooftop deck above the skyline.",
  },
};

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

function ThemeGuide({ world, align = "left", sectionTitle, text }) {
  return (
    <div className={styles.guideMessage} data-dir={align}>
      <div className={styles.guideBadge}>
        <span>{world.icon}</span>
      </div>
      <div className={styles.guideBubble}>
        <h3>{sectionTitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function PlatformShell({ section, children }) {
  return (
    <div className={styles.platformShell} data-section={section}>
      <span className={styles.platformAura} aria-hidden="true" />
      <span className={styles.platformFrame} aria-hidden="true" />
      <span className={styles.platformDock} aria-hidden="true" />
      {children}
    </div>
  );
}

function SeaJourney() {
  const rootRef = useRef(null);
  const progressRef = useRef(0);
  const mouseRef = useRef({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.35 });
  const formRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const transitionCleanupRef = useRef(null);
  const themeReadyRef = useRef(false);
  const pickerRef = useRef(null);
  const buttonRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);

  const [state, handleSubmit] = useForm("xnjnznvd");
  const [currentSection, setCurrentSection] = useState("home");
  const [currentWorld, setCurrentWorld] = useState(() => THEME_WORLDS[0]);
  const [currentPalette, setCurrentPalette] = useState(() => THEME_WORLDS[0].palettes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState(null);
  const visibleProjects = useMemo(() => projects.slice(0, 3), []);
  const currentTheme = useMemo(
    () => buildThemePresentation(currentWorld, currentPalette),
    [currentWorld, currentPalette]
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showPicker &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPicker]);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const [abyssInView, setAbyssInView] = useState(false);
  const abyssRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);
  const aboutRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);
  const projectsRef = useRef(null);
  const [contactInView, setContactInView] = useState(false);
  const contactRef = useRef(null);
  const [detailsProject, setDetailsProject] = useState(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    let latestScrollY = window.scrollY;
    let latestMouse = mouseRef.current;
    let maxScroll = 0;

    function recomputeMaxScroll() {
      const doc = document.documentElement;
      maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
    }

    function update() {
      raf = 0;
      const p = maxScroll > 0 ? clamp01(latestScrollY / maxScroll) : 0;
      progressRef.current = p;

      // Determine current section based on scroll progress
      if (p < 0.25) {
        setCurrentSection("home");
      } else if (p < 0.5) {
        setCurrentSection("about");
      } else if (p < 0.75) {
        setCurrentSection("projects");
      } else {
        setCurrentSection("contact");
      }

      // Background layer mixes
      const surface = 1 - smoothstep(0.02, 0.24, p);
      const shallow = smoothstep(0.10, 0.34, p) * (1 - smoothstep(0.34, 0.56, p));
      const deep = smoothstep(0.44, 0.70, p) * (1 - smoothstep(0.70, 0.90, p));
      const abyss = smoothstep(0.72, 0.98, p);

      root.style.setProperty("--surfaceA", surface.toFixed(4));
      root.style.setProperty("--shallowA", shallow.toFixed(4));
      root.style.setProperty("--deepA", deep.toFixed(4));
      root.style.setProperty("--abyssA", abyss.toFixed(4));
      root.style.setProperty("--scrollP", p.toFixed(5));

      root.style.setProperty("--mx", `${latestMouse.x}px`);
      root.style.setProperty("--my", `${latestMouse.y}px`);
    }

    function request() {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    }

    function onScroll() {
      latestScrollY = window.scrollY;
      request();
    }

    function onMouseMove(e) {
      latestMouse = { x: e.clientX, y: e.clientY };
      mouseRef.current = latestMouse;
      request();
    }

    function onResize() {
      recomputeMaxScroll();
      latestScrollY = window.scrollY;
      request();
    }

    recomputeMaxScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const map = new Map();
    if (aboutRef.current) map.set(aboutRef.current, setAboutInView);
    if (projectsRef.current) map.set(projectsRef.current, setProjectsInView);
    if (contactRef.current) map.set(contactRef.current, setContactInView);
    if (abyssRef.current) map.set(abyssRef.current, setAbyssInView);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const setter = map.get(entry.target);
          if (setter) setter(entry.isIntersecting);
        }
      },
      { root: null, threshold: 0.25 }
    );

    for (const el of map.keys()) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let scrollRaf = 0;

    function cancelScrollAnim() {
      if (!scrollRaf) return;
      window.cancelAnimationFrame(scrollRaf);
      scrollRaf = 0;
    }

    function onAnchorClick(e) {
      const startNode = e.target?.nodeType === 1 ? e.target : e.target?.parentElement;
      const link = startNode?.closest?.('a[href^="#"]');
      if (!link) return;
      if (e.defaultPrevented) return;
      if (e.button && e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      const doc = document.documentElement;
      const maxY = Math.max(0, doc.scrollHeight - window.innerHeight);
      const rawY = window.scrollY + target.getBoundingClientRect().top - 12;
      const desiredY = Math.min(maxY, Math.max(0, rawY));

      history.pushState(null, "", hash);

      if (prefersReducedMotion) {
        window.scrollTo(0, desiredY);
        return;
      }

      cancelScrollAnim();

      const startY = window.scrollY;
      const delta = desiredY - startY;
      const startT = performance.now();
      const distance = Math.abs(delta);
      const duration = Math.min(2400, Math.max(1100, Math.pow(distance, 0.84) * 5.6));

      function step(now) {
        const t = clamp01((now - startT) / duration);
        const eased = easeInOutCubic(t) * 0.6 + easeInOutQuint(t) * 0.4;
        window.scrollTo(0, startY + delta * eased);
        if (t < 1) scrollRaf = window.requestAnimationFrame(step);
        else scrollRaf = 0;
      }

      scrollRaf = window.requestAnimationFrame(step);
    }

    root.addEventListener("click", onAnchorClick);
    return () => {
      root.removeEventListener("click", onAnchorClick);
      cancelScrollAnim();
    };
  }, [prefersReducedMotion]);

  // Apply theme colors to CSS variables
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.style.setProperty("--theme-primary", currentTheme.primary);
    root.style.setProperty("--theme-secondary", currentTheme.secondary);
    root.style.setProperty("--theme-tertiary", currentTheme.tertiary);
    root.style.setProperty("--theme-accent", currentTheme.accent);
    root.style.setProperty("--theme-bg", currentTheme.background);
    root.style.setProperty("--env-surface-bg", currentTheme.surfaceBg);
    root.style.setProperty("--env-shallow-bg", currentTheme.shallowBg);
    root.style.setProperty("--env-deep-bg", currentTheme.deepBg);
    root.style.setProperty("--env-abyss-bg", currentTheme.abyssBg);
    root.style.setProperty("--panel-surface", currentTheme.panelSurface);
    root.style.setProperty("--panel-edge", currentTheme.panelEdge);
    root.style.setProperty("--panel-inset", currentTheme.panelInset);
    root.style.setProperty("--panel-glow", currentTheme.panelGlow);
    root.style.setProperty("--soft-text", currentTheme.softText);
    root.style.setProperty("--strong-text", currentTheme.strongText);
    root.style.setProperty("--scene-glow", currentTheme.sceneGlow);
    root.style.setProperty("--scene-horizon", currentTheme.horizon);
    root.style.setProperty("--platform-rail", currentTheme.rail);
    root.style.setProperty("--picker-shell", currentTheme.pickerShell);

    document.documentElement.style.setProperty("--body-bg", currentTheme.background);
    document.body.style.background = currentTheme.background;
  }, [currentTheme]);

  // Clear form inputs after successful submission
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.value = "";
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    try {
      const savedWorld = getWorldById(localStorage.getItem("portfolioWorld"));
      const savedPalette = getPaletteById(savedWorld, localStorage.getItem("portfolioPalette"));
      setCurrentWorld(savedWorld);
      setCurrentPalette(savedPalette);
    } finally {
      themeReadyRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (!themeReadyRef.current) return;

    localStorage.setItem("portfolioWorld", currentWorld.id);
    localStorage.setItem("portfolioPalette", currentPalette.id);
  }, [currentPalette.id, currentWorld.id]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      if (transitionCleanupRef.current) {
        window.clearTimeout(transitionCleanupRef.current);
      }
    };
  }, []);

  const handlePaletteChange = (palette) => {
    setCurrentPalette(palette);
  };

  const handleWorldChange = (nextWorld) => {
    if (nextWorld.id === currentWorld.id) return;

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }
    if (transitionCleanupRef.current) {
      window.clearTimeout(transitionCleanupRef.current);
    }

    const nextPalette = nextWorld.palettes[0];
    const travelCreature =
      nextWorld.id === "sky" || currentWorld.id === "forest" ? "bird" : nextWorld.travelCreature;
    const nextTheme = buildThemePresentation(nextWorld, nextPalette);

    setTransitionState({
      from: currentTheme,
      to: nextTheme,
      creature: travelCreature,
      payload: `${currentWorld.name} -> ${nextWorld.name}`,
    });
    setIsTransitioning(true);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setCurrentWorld(nextWorld);
      setCurrentPalette(nextPalette);
    }, 640);

    transitionCleanupRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setTransitionState(null);
    }, 1800);
  };

  return (
    <div ref={rootRef} className={clsx(styles.stage, isTransitioning && styles.transitioning)} data-environment={currentWorld.id}>
      {transitionState && (
        <div
          className={styles.transitionOverlay}
          style={{
            "--travel-from": transitionState.from.primary,
            "--travel-to": transitionState.to.secondary,
          }}
        >
          <div className={styles.transitionRoute}>
            <div className={styles.transitionWorldTag}>{transitionState.from.name}</div>
            <div className={styles.transitionRibbon} />
            <div className={styles.transitionPayload}>
              <span className={styles.transitionPayloadLabel}>Dragging the scene</span>
              <strong>{transitionState.payload}</strong>
            </div>
            <div className={styles.transitionCourier} data-creature={transitionState.creature}>
              <span className={styles.transitionCourierBody} />
            </div>
            <div className={styles.transitionWorldTag}>{transitionState.to.name}</div>
          </div>
          <div className={styles.transitionText}>
            {transitionState.creature === "bird"
              ? `A bird is carrying ${transitionState.from.name} into ${transitionState.to.name}.`
              : `Traveling from ${transitionState.from.name} to ${transitionState.to.name}.`}
          </div>
        </div>
      )}

      <div className={styles.oceanBg} aria-hidden="true">
        <div className={styles.bgSurface} />
        <div className={styles.bgShallow} />
        <div className={styles.bgDeep} />
        <div className={styles.bgAbyss} />
        <div className={styles.caustics} />
        <div className={styles.mouseLight} />
        <div className={styles.vignette} />
      </div>

      <div className={styles.worldParallax} aria-hidden="true">
        <div className={styles.worldGlow} />
        <div className={styles.worldFar} />
        <div className={styles.worldMid} />
        <div className={styles.worldNear} />
        <div className={styles.worldTrail} />
      </div>



     <div ref={pickerRef} className={styles.themePickerWrapper}>

  {/* 3D Circle Button */}
  <button
    ref={buttonRef}
    type="button"
    onClick={() => setShowPicker(prev => !prev)}
    className={clsx(styles.themePickerButton, showPicker && styles.hiddenPickerButton)}
  >
    <div className={styles.themePickerInner}>
      🎨
    </div>
  </button>

  {/* Picker */}
  {showPicker && (
    <div className={styles.themePickerPopover}>
      <ColorThemePicker
        worlds={THEME_WORLDS}
        activeWorld={currentWorld}
        activePalette={currentPalette}
        onWorldChange={handleWorldChange}
        onPaletteChange={handlePaletteChange}
      />
    </div>
  )}
</div>
      

      

      <OceanCanvas
        progressRef={progressRef}
        mouseRef={mouseRef}
        reducedMotion={prefersReducedMotion}
        environment={currentWorld.id}
        theme={currentTheme}
      />

      <Globe3D progressRef={progressRef} currentSection={currentSection} className={styles.globe3D} />

      <main className={styles.content}>
        {currentWorld.id === "sea" && (
          <div className={styles.foregroundFx} aria-hidden="true">
            {overlayBubbles.map((b) => (
              <span
                key={b.id}
                className={styles.fxBubble}
                style={{
                  "--x": b.x,
                  "--s": b.size,
                  "--drift": b.drift,
                  "--o": b.opacity,
                  "--dur": b.dur,
                  "--delay": b.delay,
                }}
              />
            ))}

            {overlayFish.map((fish) => (
              <div
                key={fish.id}
                className={styles.fxFish}
                data-dir={fish.dir}
                style={{
                  "--y": fish.y,
                  "--scale": fish.scale,
                  "--o": fish.opacity,
                  "--dur": fish.dur,
                  "--delay": fish.delay,
                  "--z": fish.z,
                }}
              >
                <FishSprite className={styles.fxFishSvg} variant={fish.variant} flipped={fish.dir === "r2l"} />
              </div>
            ))}
          </div>
        )}

        {/* Surface / Hero */}
        <section id="Home" className={clsx(styles.section, styles.surface)}>
          <div className={styles.sectionInner}>
            <div className={styles.surfaceTop} aria-hidden="true" />

            <PlatformShell section="hero">
              <div className={styles.hero}>
                <div className={styles.heroBadge}>MEAN Stack Developer • Encova Solutions • {currentWorld.title}</div>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroKicker}>HEY, I’M</span> Abirullah
                </h1>
                <p className={styles.heroSub}>
                  I'm a full-stack developer obsessed with building beautiful, performant web experiences. I craft React frontends that users love, Node/Express backends that scale effortlessly, and MongoDB databases that keep everything organized. Currently building amazing things at Encova Solutions while staying curious and pushing boundaries every single day.
                </p>

                <div className={styles.heroThemeLine}>
                  <span className={styles.heroThemeDot} />
                  Walking through the {currentWorld.name.toLowerCase()} with a {currentPalette.name} finish
                </div>

                <div className={styles.heroActions}>
                  <a href={cv} download="Abirullah_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <DownloadButton>Download Resume</DownloadButton>
                  </a>
                  <a className={styles.ghostCta} href="#About">
                    Explore World
                  </a>
                </div>

                <div className={styles.socialBubbles}>
                  <a className={styles.socialBubble} href="https://github.com/Abirullah" target="_blank" rel="noreferrer">
                    <AiFillGithub size="22px" />
                  </a>
                  <a
                    className={styles.socialBubble}
                    href="https://pk.linkedin.com/in/abir-afridi-2856a02b0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size="22px" />
                  </a>
                  <a
                    className={styles.socialBubble}
                    href="mailto:abirafridi87@gmail.com?subject=SendMail&body=Description"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLogoGmail size="22px" />
                  </a>
                  <a
                    className={styles.socialBubble}
                    href="https://www.facebook.com/share/iPpuE83eD6ymf6PE/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size="22px" />
                  </a>
                </div>
              </div>
            </PlatformShell>

            <div className={styles.scrollHint} aria-hidden="true">
              <div className={styles.scrollMouse} />
              <div className={styles.scrollText}>Scroll</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="About"
          ref={aboutRef}
          data-inview={aboutInView ? "true" : "false"}
          className={clsx(styles.section, styles.shallows)}
        >
          <div className={styles.sectionInner}>
            <ThemeGuide world={currentWorld} align="left" sectionTitle="About Me" text={sectionGuideCopy[currentWorld.id].about} />

            <PlatformShell section="about">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2>About</h2>
                  <p>More about me + what I’m good at.</p>
                </div>

                <div className={styles.aboutGrid}>
                  <div className={styles.aboutText}>
                    <h3>Who I am</h3>
                    <p>
                      I'm a <span>MERN Stack developer</span> that obsesses over clean code and stunning user experiences. Currently, I'm at <span>Encova Solutions</span>, building robust React interfaces and scalable Node/Express backends that actually make a difference.
                      <br />
                      <br />
                      Beyond shipping features, I'm passionate about understanding <span>why</span> technology works, mentoring other developers, and exploring the intersection of beautiful design and solid engineering. I believe great software is invisible—it just works, and users wonder how they ever lived without it.
                      <br />
                      <br />
                      <strong>Let's collaborate</strong> on projects where performance, UX, and code quality matter.
                    </p>

                    <ul className={styles.aboutHighlights}>
                      <li>
                        <strong>Frontend Mastery:</strong> React, TypeScript, Tailwind CSS, Bootstrap, responsive & accessible UI
                      </li>
                      <li>
                        <strong>Backend Strength:</strong> Node.js, Express, RESTful APIs, MongoDB, authentication & authorization
                      </li>
                      <li>
                        <strong>Core Values:</strong> Performance optimization, clean code, user-first design, continuous learning
                      </li>
                    </ul>
                  </div>

                  <div className={styles.skillsPanel}>
                    <h3>My Skills</h3>
                    <div className={styles.skillBubbles}>
                      {skills.map((skill, index) => (
                        <div key={`skill${index}`} className={clsx(styles.skillBubble, styles[skill.cssName])}>
                          <div className={styles.skillName}>{skill.name}</div>
                          <div className={styles.skillIcon}>{skill.icon}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PlatformShell>
          </div>
        </section>

        {/* Education Section */}
        <section className={clsx(styles.section, styles.education)}>
          <div className={styles.sectionInner}>
            <div className={styles.cardHeader} style={{ marginBottom: '32px', textAlign: 'center' }}>
              <h2>Education</h2>
              <p>Building foundations for a lifetime of learning</p>
            </div>

            <div className={styles.educationGrid}>
              {education.map((edu, index) => (
                <article key={`edu${index}`} className={styles.eduCard}>
                  <div className={styles.eduYear}>{edu.year}</div>
                  <h3>{edu.degree}</h3>
                  <p className={styles.eduSchool}>{edu.school}</p>
                  <p className={styles.eduField}>{edu.field}</p>
                  <p className={styles.eduDescription}>{edu.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={clsx(styles.section, styles.experience)}>
          <div className={styles.sectionInner}>
            <div className={styles.cardHeader} style={{ marginBottom: '32px', textAlign: 'center' }}>
              <h2>Professional Journey</h2>
              <p>Where I've learned, built, and grown</p>
            </div>

            <div className={styles.experienceTimeline}>
              {experience.map((exp, index) => (
                <article key={`exp${index}`} className={styles.expCard}>
                  <div className={styles.expHeader}>
                    <h3>{exp.title}</h3>
                    <p className={styles.expPeriod}>{exp.period}</p>
                  </div>
                  <p className={styles.expCompany}>{exp.company}</p>
                  <ul className={styles.expHighlights}>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={`highlight${idx}`}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="Projects"
          ref={projectsRef}
          data-inview={projectsInView ? "true" : "false"}
          className={clsx(styles.section, styles.deep)}
        >
          <div className={styles.sectionInner}>
            <ThemeGuide world={currentWorld} align="right" sectionTitle="Projects" text={sectionGuideCopy[currentWorld.id].projects} />

            <PlatformShell section="projects">
              <div className={clsx(styles.card, styles.projectsCard)}>
                <div className={styles.cardHeader}>
                  <h2>Projects</h2>
                  <p>All projects in one section with richer 3D-inspired cards.</p>
                  <div className={styles.projectHeadingMeta}>
                    <span className={styles.projectCounter}>Showing {visibleProjects.length} projects</span>
                    <span className={styles.projectHint}>Priority projects are highlighted</span>
                  </div>
                </div>

                <div className={styles.projectGrid}>
                  {visibleProjects.map((project, index) => (
                    <article
                      key={`project${index}`}
                      className={clsx(styles.projectCard, {
                        [styles.featuredProject]: project.featured,
                      })}
                    >
                      <div className={styles.projectMedia}>
                        <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
                        {project.featured && (
                          <div className={styles.featuredBadge}>
                            <span>Featured</span>
                          </div>
                        )}
                        {project.inProgress && (
                          <div className={styles.inProgressBadge}>
                            <span>In Progress</span>
                          </div>
                        )}
                      </div>
                      <div className={styles.projectBody}>
                        <div className={styles.projectMetaRow}>
                          <span
                            className={clsx(styles.priorityTag, {
                              [styles.priorityTagHot]: project.priority,
                              [styles.priorityTagMuted]: !project.priority,
                            })}
                          >
                            {project.priority ? "Priority Project" : "More Project"}
                          </span>
                        </div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className={styles.projectActions}>
                          {project.hasDetails ? (
                            <IconButton
                              width="155px"
                              height="46px"
                              backgroundColor={currentTheme.panelGlow}
                              color="white"
                              onClick={() => setDetailsProject(project)}
                              icon={<AiOutlineEye size="22px" color="white" />}
                            >
                              Details
                            </IconButton>
                          ) : (
                            <>
                              <IconButton
                                width="155px"
                                height="46px"
                                backgroundColor={currentTheme.panelGlow}
                                color="white"
                                link={project.link}
                                icon={<AiOutlineEye size="22px" color="white" />}
                              >
                                Live Demo
                              </IconButton>
                              <IconButton
                                width="120px"
                                height="46px"
                                backgroundColor={currentTheme.panelInset}
                                color="white"
                                link={project.github}
                                icon={<AiFillGithub size="22px" color="white" />}
                              >
                                GitHub
                              </IconButton>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </PlatformShell>
          </div>
        </section>

        {/* Project Details Modal */}
        {detailsProject && (
          <div className={styles.detailsModal} onClick={() => setDetailsProject(null)}>
            <div className={styles.detailsContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setDetailsProject(null)}>×</button>
              <h2>{detailsProject.name}</h2>
              <p>{detailsProject.description}</p>
              <div className={styles.detailsActions}>
                <IconButton
                  width="160px"
                  height="46px"
                  backgroundColor={currentTheme.panelGlow}
                  color="white"
                  link={detailsProject.frontendGithub}
                  icon={<AiFillGithub size="22px" color="white" />}
                >
                  Frontend Code
                </IconButton>
                <IconButton
                  width="160px"
                  height="46px"
                  backgroundColor={currentTheme.panelInset}
                  color="white"
                  link={detailsProject.backendGithub}
                  icon={<AiFillGithub size="22px" color="white" />}
                >
                  Backend Code
                </IconButton>
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
        <section
          id="Contact"
          ref={contactRef}
          data-inview={contactInView ? "true" : "false"}
          className={clsx(styles.section, styles.trench)}
        >
          <div className={styles.sectionInner}>
            <ThemeGuide world={currentWorld} align="left" sectionTitle="Contact" text={sectionGuideCopy[currentWorld.id].contact} />

            <PlatformShell section="contact">
              <div className={clsx(styles.card, styles.contactCard)}>
                <div className={styles.cardHeader}>
                  <h2>Contact</h2>
                  <p>Submit the form and I’ll get back to you as soon as possible.</p>
                </div>

                {state.succeeded && <p className={styles.success}>Thank you! Your message has been sent successfully.</p>}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={clsx(styles.form, {
                    [styles.inactiveForm]: state.submitting,
                  })}
                >
                  <InputField
                    width="900px"
                    height="44px"
                    name="name"
                    placeholder="Enter your name"
                    label="Name"
                    type="text"
                    required
                  />

                  <InputField
                    width="900px"
                    height="44px"
                    name="email"
                    placeholder="Enter your email"
                    label="Email"
                    type="email"
                    required
                  />

                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  <TextAreaField
                    width="900px"
                    height="220px"
                    name="message"
                    placeholder="Write your message"
                    label="Message"
                    required
                  />

                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <div className={styles.formActions}>
                    <SubmitButton
                      icon={<RiSendPlaneFill size="18px" color="white" />}
                      width="190px"
                      height="54px"
                      color="white"
                      backgroundColor={currentTheme.secondary}
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Submit"}
                    </SubmitButton>
                  </div>

                  {state.submitting && (
                    <div className={styles.loader}>
                      <Loader />
                    </div>
                  )}
                </form>
              </div>
            </PlatformShell>
          </div>
        </section>

        {/* Finale */}
        <section
          ref={abyssRef}
          data-inview={abyssInView ? "true" : "false"}
          className={clsx(styles.section, styles.abyss)}
        >
          <div className={styles.sectionInner}>
            <div className={styles.abyssText}>
              <div className={styles.abyssTag}>{currentWorld.title}</div>
              <h2>Let’s Build Your Next App</h2>
              <p>
                {sectionGuideCopy[currentWorld.id].finale} Need a modern UI, a fast landing page, or a complete
                full-stack product? I build React frontends and Node/Express backends with MongoDB, and I care about
                speed, clarity, and a smooth user experience.
              </p>
            </div>

            <div className={styles.titanicWrap} aria-hidden="true">
              {currentWorld.id === "sea" ? (
                <Titanic className={styles.titanic} />
              ) : (
                <div className={styles.worldMonument} data-scene={currentWorld.id}>
                  <span className={styles.worldMonumentGlow} />
                  <span className={styles.worldMonumentShape} />
                </div>
              )}
              <div className={styles.sandFog} />
            </div>

            <DeepNav visible={abyssInView} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default SeaJourney;
