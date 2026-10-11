import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnjnznvd");

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Form Column */}
        <div className={styles.formCol}>
          {state.succeeded ? (
            <div className={styles.successMsg}>
              Thank you! Your message has been sent successfully. I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={styles.input}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className={styles.input}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                id="website"
                type="text"
                name="website"
                placeholder="Your website (If exists)"
                className={styles.input}
              />

              <textarea
                id="message"
                name="message"
                required
                placeholder="How can I help?*"
                className={styles.textarea}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submitBtn}
              >
                {state.submitting ? "Sending..." : "Get In Touch"}
              </button>
            </form>
          )}

          {/* Social icons row under form */}
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

        {/* Right Info Column */}
        <div className={styles.infoCol}>
          <h2 className={styles.headline}>
            Let&apos;s <span className={styles.strokedText}>talk</span> for Something special
          </h2>

          <p className={styles.description}>
            I seek to push the limits of creativity and engineering to create high-engaging, user-friendly, and memorable interactive experiences. Whether you have a project to build, need architectural consultation, or want to collaborate with Abler—feel free to reach out.
          </p>

          <div className={styles.contactDirect}>
            <a href="mailto:abirafridi87@gmail.com" className={styles.contactEmail}>
              abirafridi87@gmail.com
            </a>
            <a
              href="https://wa.me/923361913981"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactPhone}
            >
              +92 336 1913981
            </a>
            <span className={styles.contactLocation}>
              Peshawar, Khyber Pakhtunkhwa, Pakistan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };

