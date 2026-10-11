import taskMasterImg from "../../assets/images/Todolist.jpeg";
import echoTuneImg from "../../assets/images/GlobalShare.png";
import schoolErpImg from "../../assets/images/SchoolMgmt.svg";
import scanCareImg from "../../assets/images/watherapp.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";
import useInView from "./useInView";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    number: "01",
    title: "TaskMaster — Team Collaboration & AI Chatbot",
    desc: "A full-stack collaborative task management application featuring team spaces, automated email task assignment, an interactive AI chatbot assistant, and secure Cloudinary asset persistence.",
    image: taskMasterImg,
    url: "https://abirafriditaskmaster.vercel.app/",
    reversed: false,
  },
  {
    number: "02",
    title: "EchoTune — Music Marketplace & Audio Streaming",
    desc: "A MERN-based digital music platform designed for independent creators to upload, license, and monetize original audio recordings with waveform preview streaming.",
    image: echoTuneImg,
    url: "https://echotuneapp.vercel.app/",
    reversed: true,
  },
  {
    number: "03",
    title: "Madrassa & School Management ERP",
    desc: "An enterprise institutional management system featuring multi-tier RBAC for Super-Admins, teachers, accountants, and parents, powered by PostgreSQL, Drizzle ORM, and Better Auth.",
    image: schoolErpImg,
    url: "https://github.com/Abirullah",
    reversed: false,
  },
  {
    number: "04",
    title: "Scan Care — AI Skin Health Analysis",
    desc: "An AI-powered diagnostic application enabling patients to capture skin scans and receive rapid algorithmic risk triage through integrated computer vision models.",
    image: scanCareImg,
    url: "https://github.com/Abirullah",
    reversed: true,
  },
];

function ProjectItem({ proj }) {
  const [rowRef, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <div
      ref={rowRef}
      className={`${styles.projectRow} ${
        proj.reversed ? styles.reversedRow : ""
      } ${isInView ? styles.rowVisible : ""}`}
    >
      {/* If reversed on desktop: details left, image right */}
      {proj.reversed ? (
        <>
          <div
            className={`${styles.detailsCol} ${
              isInView ? styles.slideInLeft : ""
            }`}
          >
            <span className={styles.projectNumber}>{proj.number}</span>
            <h3 className={styles.projectTitle}>{proj.title}</h3>
            <p className={styles.projectDesc}>{proj.desc}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label={`Open ${proj.title}`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          <div
            className={`${styles.imageCol} ${
              isInView ? styles.curtainReveal : ""
            }`}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className={styles.projectImg}
              loading="lazy"
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={`${styles.imageCol} ${
              isInView ? styles.curtainReveal : ""
            }`}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className={styles.projectImg}
              loading="lazy"
            />
          </div>

          <div
            className={`${styles.detailsCol} ${
              isInView ? styles.slideInRight : ""
            }`}
          >
            <span className={styles.projectNumber}>{proj.number}</span>
            <h3 className={styles.projectTitle}>{proj.title}</h3>
            <p className={styles.projectDesc}>{proj.desc}</p>
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label={`Open ${proj.title}`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section id="projects" ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isInView ? styles.titleVisible : ""}`}>
          My <strong>Projects</strong>
        </h2>

        <div className={styles.projectsList}>
          {PROJECTS.map((proj, idx) => (
            <ProjectItem key={idx} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
