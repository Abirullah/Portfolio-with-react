import { FaReact } from "react-icons/fa";
import styles from "./SeaJourney.module.css";

function DeepNav({ visible }) {
  return (
    <nav
      className={styles.deepNav}
      data-visible={visible ? "true" : "false"}
      aria-label="Portfolio navigation"
    >
      <a className={styles.deepBrand} href="#Home">
        <FaReact size={18} />
        <span>Abirullah</span>
      </a>
      <div className={styles.deepLinks}>
        <a href="#Home">Surface</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
    </nav>
  );
}

export default DeepNav;
