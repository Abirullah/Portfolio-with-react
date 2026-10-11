import { useMemo } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import PencilSketch from "./PencilSketch";
import styles from "./Hero.module.css";

// Abirullah Hero Component - Ball Bounce & Pencil Sketch

// 3 Lines of the Hero headline
const TITLE_LINES = [
  // Line 1: Hello I'am Abirullah.
  [
    { text: "Hello", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "I'am", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "Abirullah.", isStrong: true, isStroked: false },
  ],
  // Line 2: Full Stack Developer
  [
    { text: "Full", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "Stack", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "Developer", isStrong: false, isStroked: true },
  ],
  // Line 3: Based In Pakistan.
  [
    { text: "Based", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "In", isStrong: false, isStroked: false },
    { text: " ", isSpace: true },
    { text: "Pakistan.", isStrong: true, isStroked: false },
  ],
];

export default function Hero() {
  // Precompute characters across all 3 lines for synchronized ball-bounce delays
  const renderedLines = useMemo(() => {
    // Total character count across all lines
    let totalChars = 0;
    TITLE_LINES.forEach((line) => {
      line.forEach((token) => {
        totalChars += token.text.length;
      });
    });

    // 10s total duration with 1.4s bounce time per letter -> 8.6s stagger window
    const bounceDuration = 1.4;
    const staggerWindow = 8.6;
    const step = totalChars > 1 ? staggerWindow / (totalChars - 1) : 0;

    let globalIndex = 0;

    return TITLE_LINES.map((lineTokens, lineIdx) => {
      const renderedTokens = lineTokens.map((token, tokenIdx) => {
        if (token.isSpace) {
          const delay = (globalIndex * step).toFixed(3);
          globalIndex += 1;
          return (
            <span
              key={`space-${lineIdx}-${tokenIdx}`}
              className={styles.bouncingSpace}
              style={{
                animationDelay: `${delay}s`,
                animationDuration: `${bounceDuration}s`,
              }}
            >
              &nbsp;
            </span>
          );
        }

        // Split word into characters
        const charSpans = token.text.split("").map((char, charIdx) => {
          const delay = (globalIndex * step).toFixed(3);
          globalIndex += 1;
          return (
            <span
              key={`char-${lineIdx}-${tokenIdx}-${charIdx}`}
              className={`${styles.bouncingChar} ${
                token.isStrong ? styles.strongChar : ""
              } ${token.isStroked ? styles.strokedChar : ""}`}
              style={{
                animationDelay: `${delay}s`,
                animationDuration: `${bounceDuration}s`,
              }}
            >
              {char}
            </span>
          );
        });

        return (
          <span
            key={`word-${lineIdx}-${tokenIdx}`}
            className={styles.wordBlock}
          >
            {charSpans}
          </span>
        );
      });

      return (
        <span key={`line-${lineIdx}`} className={styles.titleLine}>
          {renderedTokens}
        </span>
      );
    });
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left text column */}
        <div className={styles.textContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{renderedLines}</h1>
          </div>

          <p className={styles.description}>
            I&apos;m a software engineer and Chief Technology Officer at Abler,
            building high-performance web systems and full-stack digital
            products. Focused on clean architecture, intuitive user interfaces,
            and turning ideas into impactful code.
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

        {/* Right image column: Pencil sketching Abirullah's illustration */}
        <div className={styles.imageContent}>
          <PencilSketch
            imageSrc="/abirullah-hero.jpg"
            duration={10000} // exactly 10 seconds
          />
        </div>
      </div>
    </section>
  );
}

export { Hero };
