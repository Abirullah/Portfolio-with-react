import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#top" className={styles.logo}>
          <span className={styles.logoIcon}>A</span>
          <span>Abirullah</span>
        </a>

        {/* Desktop Links */}
        <nav className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>
            About Me
          </a>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
          <a href="#projects" className={styles.navLink}>
            Project
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact Me
          </a>
        </nav>

        {/* Desktop Resume Button */}
        <a
          href="/MyResume2026.pdf"
          download="Abirullah_Resume_2026.pdf"
          className={styles.resumeBtn}
        >
          <span>Resume</span>
          <FaDownload style={{ fontSize: "11px" }} />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={styles.mobileToggle}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#about"
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            About Me
          </a>
          <a
            href="#skills"
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            Project
          </a>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            Contact Me
          </a>
          <a
            href="/MyResume2026.pdf"
            download="Abirullah_Resume_2026.pdf"
            className={styles.mobileResumeBtn}
            onClick={() => setMobileOpen(false)}
          >
            <span>Resume</span>
            <FaDownload style={{ fontSize: "11px" }} />
          </a>
        </div>
      )}
    </header>
  );
}

export { Navbar };

