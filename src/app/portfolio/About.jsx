import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left: Illustration in bordered box */}
        <div className={styles.imageCol}>
          <div className={styles.imageBox}>
            <img
              src="/abirullah-about.jpg"
              alt="Abirullah - Software Engineer & CTO at Abler"
              className={styles.aboutImg}
            />
          </div>
        </div>

        {/* Right: Text story */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            About <strong>Me</strong>
          </h2>

          <p className={styles.paragraph}>
            I&apos;m a passionate full-stack software engineer and technical leader specializing in modern web ecosystems (React, Node.js, Express, PostgreSQL, MongoDB, and modern full-stack architectures). I care deeply about clean code architecture, intuitive user interfaces, and writing reliable software that solves genuine problems.
          </p>

          <p className={styles.paragraph}>
            My journey combines practical venture leadership with academic rigor. As Chief Technology Officer at Abler (abler.dev), a company founded by four brothers to turn ideas into software products, I direct technical choices and build client systems. Concurrently, as a Computer Science student at IMSciences in Peshawar, I continue to deepen my grounding in algorithms, database design, and low-level system design.
          </p>


        </div>
      </div>
    </section>
  );
}

export { About };
