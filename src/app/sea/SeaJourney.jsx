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
import cv from "../../assets/files/MyResume2025.pdf";

import OceanCanvas from "./OceanCanvas";
import FishSprite from "./FishSprite";
import Titanic from "./Titanic";
import DeepNav from "./DeepNav";
import Globe3D from "./Globe3D";
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
    name: "TaskMaster - Task Management App",
    link: "https://abirafriditaskmaster.vercel.app/",
    github: "https://github.com/Abirullah/To-dose-app",
    description:
      "A comprehensive task management dashboard with private tasks, AI chat, teams, and submissions. Built with React, featuring a clean, sexy dashboard that looks premium and feels fast.",
    image: Todo,
    priority: true,
    featured: true,
  },
  {
    name: "EchoTune - Music Streaming Platform",
    link: "https://echotuneapp.vercel.app/",
    github: "https://github.com/Abirullah/Music-Wed-FrontEnd",
    description:
      "A modern music streaming web app with vibrant UI, content creator/user roles, and seamless music discovery. Built for music lovers who want a premium listening experience.",
    image: GlobalShare,
    priority: true,
    featured: true,
  },
  {
    name: "Country Information Explorer",
    link: "https://abirullah.github.io/Countery-app-for-infromation/",
    github: "https://github.com/Abirullah/Countery-app-for-infromation",
    description:
      "Powered by a reliable API, Country Information Explorer delivers trustworthy data with a clean, fast UI for discovery and learning.",
    image: GlobalShare,
    priority: false,
  },
  {
    name: "Weather App",
    link: "https://Abirullah.github.io/React-wather-app",
    github: "https://github.com/Abirullah/React-wather-app",
    description:
      "A weather app with live API data, search by city, and friendly, readable forecasts built for daily use.",
    image: Wather,
    priority: false,
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

function SeaJourney() {
  const rootRef = useRef(null);
  const progressRef = useRef(0);
  const mouseRef = useRef({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.35 });

  const [state, handleSubmit] = useForm("xnjnznvd");
  const [currentSection, setCurrentSection] = useState("home");

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
      const duration = Math.min(1600, Math.max(900, Math.abs(delta) * 0.65));

      function step(now) {
        const t = clamp01((now - startT) / duration);
        const eased = easeInOutCubic(t);
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

  return (
    <div ref={rootRef} className={styles.stage}>
      <div className={styles.oceanBg} aria-hidden="true">
        <div className={styles.bgSurface} />
        <div className={styles.bgShallow} />
        <div className={styles.bgDeep} />
        <div className={styles.bgAbyss} />
        <div className={styles.caustics} />
        <div className={styles.mouseLight} />
        <div className={styles.vignette} />
      </div>

      <OceanCanvas progressRef={progressRef} mouseRef={mouseRef} reducedMotion={prefersReducedMotion} />

      <Globe3D progressRef={progressRef} currentSection={currentSection} className={styles.globe3D} />

      <main className={styles.content}>
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

        {/* Surface / Hero */}
        <section id="Home" className={clsx(styles.section, styles.surface)}>
          <div className={styles.sectionInner}>
            <div className={styles.surfaceTop} aria-hidden="true" />

            <div className={styles.hero}>
              <div className={styles.heroBadge}>MEAN Stack Developer • Encova Solutions</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroKicker}>HEY, I’M</span> Abirullah
              </h1>
              <p className={styles.heroSub}>
                I build fast, responsive web apps with clean UI and solid back‑ends — React on the front, Node/Express +
                MongoDB on the back. If you want a modern website or web app that feels smooth and converts, let’s work.
              </p>

              <div className={styles.heroActions}>
                <a href={cv} download="Abirullah_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <DownloadButton>Download Resume</DownloadButton>
                </a>
                <a className={styles.ghostCta} href="#About">
                  Dive In
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
            <div className={styles.fishMessage} data-dir="left">
              <FishSprite className={styles.fish} variant="cyan" />
              <div className={styles.fishBubble}>
                <h3>About Me</h3>
                <p>Follow the fish — every scroll takes you deeper into my work.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>About</h2>
                <p>More about me + what I’m good at.</p>
              </div>

              <div className={styles.aboutGrid}>
                <div className={styles.aboutText}>
                  <h3>Get to know me</h3>
                  <p>
                    I’m a <span>MEAN Stack Web Developer</span> who loves building responsive, user‑friendly web apps.
                    I’m currently working at <span>Encova Solutions</span>, where I build React UIs and Node/Express APIs.
                    <br />
                    <br />
                    I’m open to <span>freelance</span> and <span>job opportunities</span> where I can contribute, grow, and
                    ship real value.
                  </p>

                  <ul className={styles.aboutHighlights}>
                    <li>
                      <strong>Frontend:</strong> React, TypeScript, Tailwind/Bootstrap, responsive UI
                    </li>
                    <li>
                      <strong>Backend:</strong> Node.js, Express, REST APIs, MongoDB
                    </li>
                    <li>
                      <strong>Focus:</strong> performance, clean UX, and maintainable code
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
            <div className={styles.fishMessage} data-dir="right">
              <FishSprite className={styles.fish} variant="gold" flipped />
              <div className={styles.fishBubble}>
                <h3>Projects</h3>
                <p>Fish fly in from different directions — like ideas turning into products.</p>
              </div>
            </div>

            <div className={clsx(styles.card, styles.projectsCard)}>
              <div className={styles.cardHeader}>
                <h2>Projects</h2>
                <p>All projects in one section with richer 3D-inspired cards.</p>
                <div className={styles.projectHeadingMeta}>
                  <span className={styles.projectCounter}>Showing all {projects.length} projects</span>
                  <span className={styles.projectHint}>Priority projects are highlighted</span>
                </div>
              </div>

              <div className={styles.projectGrid}>
                {projects.map((project, index) => (
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
                          <span>⭐ Featured</span>
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
                        <IconButton
                          width="155px"
                          height="46px"
                          backgroundColor="rgba(120, 200, 255, 0.18)"
                          color="white"
                          link={project.link}
                          icon={<AiOutlineEye size="22px" color="white" />}
                        >
                          Live Demo
                        </IconButton>
                        <IconButton
                          width="120px"
                          height="46px"
                          backgroundColor="rgba(255,255,255,0.10)"
                          color="white"
                          link={project.github}
                          icon={<AiFillGithub size="22px" color="white" />}
                        >
                          GitHub
                        </IconButton>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="Contact"
          ref={contactRef}
          data-inview={contactInView ? "true" : "false"}
          className={clsx(styles.section, styles.trench)}
        >
          <div className={styles.sectionInner}>
            <div className={styles.fishMessage} data-dir="left">
              <FishSprite className={styles.fish} variant="pink" />
              <div className={styles.fishBubble}>
                <h3>Contact</h3>
                <p>Send a message — I’ll surface to reply.</p>
              </div>
            </div>

            <div className={clsx(styles.card, styles.contactCard)}>
              <div className={styles.cardHeader}>
                <h2>Contact</h2>
                <p>Submit the form and I’ll get back to you as soon as possible.</p>
              </div>

              {state.succeeded && <p className={styles.success}>✅ Thank you! Your message has been sent successfully.</p>}

              <form
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
                    backgroundColor="rgba(94, 7, 205, 0.95)"
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
          </div>
        </section>

        {/* Abyss / Titanic + Nav */}
        <section
          ref={abyssRef}
          data-inview={abyssInView ? "true" : "false"}
          className={clsx(styles.section, styles.abyss)}
        >
          <div className={styles.sectionInner}>
            <div className={styles.abyssText}>
              <div className={styles.abyssTag}>Abyss</div>
              <h2>Let’s Build Your Next App</h2>
              <p>
                Need a modern UI, a fast landing page, or a complete full‑stack product? I build React front‑ends and
                Node/Express back‑ends with MongoDB — and I care about speed, clarity, and a smooth user experience.
              </p>
            </div>

            <div className={styles.titanicWrap} aria-hidden="true">
              <Titanic className={styles.titanic} />
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
