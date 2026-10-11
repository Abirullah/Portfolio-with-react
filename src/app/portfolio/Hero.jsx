import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left text column */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              Hello I&apos;am <strong>Abirullah.</strong>
            </span>
            <span className={styles.titleLine}>
              Full Stack <span className={styles.strokedText}>Developer</span>
            </span>
            <span className={styles.titleLine}>
              Based In <strong>Pakistan.</strong>
            </span>
          </h1>

          <p className={styles.description}>
            I&apos;m a software engineer and Chief Technology Officer at Abler, building high-performance web systems and full-stack digital products. Focused on clean architecture, intuitive user interfaces, and turning ideas into impactful code.
          </p>

          {/* Social icons row */}
          <div className={styles.socialRow}>
            <a
              href="https://github.com/Abirullah"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abir-afridi-2856a02b0/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/923361913981"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:abirafridi87@gmail.com"
              className={styles.socialBtn}
              aria-label="Email Address"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right image column */}
        <div className={styles.imageContent}>
          <div className={styles.illustrationWrapper}>
            <img
              src="/abirullah-hero.jpg"
              alt="Abirullah - Full Stack Developer illustration"
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
