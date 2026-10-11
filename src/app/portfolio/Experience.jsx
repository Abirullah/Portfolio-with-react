import useInView from "./useInView";
import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    role: "Chief Technology Officer at Abler",
    badgeText: "A",
    date: "Aug 2026 - Present",
    description:
      "Serving as CTO and co-founder at Abler (abler.dev), directing technical architecture and systems design. Evaluating technology stacks, building client and internal software platforms, and establishing engineering standards across the team.",
  },
  {
    role: "Full Stack Engineer at Code Club",
    badgeText: "CC",
    date: "Jul 2026 - Present",
    description:
      "Engineering responsive interfaces and optimizing backend API endpoints. Collaborating on team applications, state management, and full-stack feature delivery across modern web frameworks.",
  },
  {
    role: "MERN Stack Developer at Encova Soluation",
    badgeText: "ES",
    date: "Dec 2025 - May 2026",
    description:
      "Engineering responsive interfaces and optimizing backend API endpoints. Collaborating on team applications, state management, and full-stack feature delivery across modern web frameworks.",
  },
];

export default function Experience() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section id="experience" ref={sectionRef} className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isInView ? styles.titleVisible : ""}`}>
          My <strong>Experience</strong>
        </h2>

        <div className={styles.cardsList}>
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className={`${styles.card} ${
                  isInView
                    ? isEven
                      ? styles.slideFromRight
                      : styles.slideFromLeft
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 160}ms`,
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.roleTitleWrapper}>
                    <div className={styles.companyBadge}>{exp.badgeText}</div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                  </div>
                  <span className={styles.dateRange}>{exp.date}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Experience };
