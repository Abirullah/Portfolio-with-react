import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { About } from "./About";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="top" className={styles.portfolioRoot}>
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section (White bg, stroked 'Developer' text, line-art boy on laptop) */}
        <Hero />

        {/* 3. My Skills (White bg, square bordered skill cards + inverted black cards) */}
        <Skills />

        {/* 4. My Experience (Solid black bg, dark cards with white typography) */}
        <Experience />

        {/* 5. About Me (White bg, bordered boy illustration, narrative) */}
        <About />

        {/* 6. My Projects (Solid black bg, alternating zigzag layout) */}
        <Projects />

        {/* 7. My Testimonial (White bg, review cards) */}
        <Testimonials />

        {/* 8. Contact (White bg, black-bordered inputs, stroked 'talk' text) */}
        <Contact />
      </main>

      {/* 9. Footer (Solid black bg, logo & copyright) */}
      <Footer />
    </div>
  );
}

export { Portfolio };
