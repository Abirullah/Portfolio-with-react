import {
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import styles from "./Skills.module.css";

const SKILLS = [
  { name: "Git", icon: <FaGitAlt />, inverted: false },
  { name: "JavaScript", icon: <SiJavascript />, inverted: true },
  { name: "React", icon: <FaReact />, inverted: false },
  { name: "Node.Js", icon: <FaNodeJs />, inverted: false },
  { name: "TypeScript", icon: <SiTypescript />, inverted: true },
  { name: "PostgreSQL", icon: <SiPostgresql />, inverted: false },
  { name: "MongoDB", icon: <SiMongodb />, inverted: true },
  { name: "Express.Js", icon: <SiExpress />, inverted: false },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, inverted: false },
  { name: "Docker", icon: <FaDocker />, inverted: false },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          My <strong>Skills</strong>
        </h2>

        <div className={styles.skillsGrid}>
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${
                skill.inverted ? styles.invertedCard : ""
              }`}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };

