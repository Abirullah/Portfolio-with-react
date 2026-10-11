import useInView from "./useInView";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    initial: "A",
    quote:
      "Abirullah brings exceptional technical vision and full-stack rigor. At Abler, his architectural choices and execution speed have been foundational in delivering scalable software products.",
    name: "Abler Founding Team",
    role: "Product Lead",
    inverted: false,
  },
  {
    initial: "CC",
    quote:
      "Working alongside Abirullah at Code Club showed his deep mastery of full-stack engineering, clean API design, and dependable team collaboration under tight sprint deadlines.",
    name: "Code Club Engineering",
    role: "Full Stack Developer",
    inverted: true,
  },
  {
    initial: "IM",
    quote:
      "His understanding of computer science foundations, algorithms, and relational database systems consistently shines in complex academic and real-world system design.",
    name: "IMSciences CS Peer",
    role: "Academic Merit Review",
    inverted: false,
  },
];

export default function Testimonials() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section id="testimonials" ref={sectionRef} className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isInView ? styles.titleVisible : ""}`}>
          My <strong>Testimonial</strong>
        </h2>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${
                t.inverted ? styles.invertedCard : ""
              } ${isInView ? styles.cardFloatActive : ""}`}
              style={{
                animationDelay: `${idx * 160}ms, ${idx * 900}ms`,
              }}
            >
              <div className={styles.avatar}>{t.initial}</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.authorMeta}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
