import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoIcon}>A</span>
          <span>Abirullah</span>
        </a>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Abirullah · Designed &amp; Built by Abirullah
        </div>
      </div>
    </footer>
  );
}

export { Footer };

