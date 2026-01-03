import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/MyResume2025.pdf";
import FormOpenButton from "../common/components/SubmitButton/FormOpenButton";

// import icons
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiReactquery } from "react-icons/si";
import { SiExpress } from "react-icons/si";

//import images
import Todo from "../assets/images/Todolist.jpeg";
import GlobalShare from "../assets/images/GlobalShare.png";
import Wather from "../assets/images/watherapp.jpeg";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
    animinate: "zoom-in-left",
  },
  {
    name: "CSS 3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
    animinate: "zoom-in-left",
  },
  {
    name: "Java Script",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "java-script",
    animinate: "zoom-in-up",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="25px" color="white" />,
    cssName: "type-script",
    animinate: "zoom-in-up",
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
    animinate: "zoom-in-right",
  },
  {
    name: "API Fetching",
    icon: <AiOutlineEye size="25px" color="white" />, // Using eye icon as a placeholder
    cssName: "api-fetching",
    animinate: "zoom-in-right",
  },
  {
    name: "Express",
    icon: <SiExpress size="25px" color="white" backgroundColor="red" />,
    cssName: "express",
    animinate: "zoom-in-left",
  },
  {
    name: "Bootstrip",
    icon: <BiLogoBootstrap size="25px" color="white" />,
    animinate: "zoom-in",
    cssName: "redux",
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss size="25px" color="white" />,
    animinate: "zoom-in",
    cssName: "recoil",
  },
  {
    name: "React Query",
    icon: <SiReactquery size="25px" color="white" />,
    animinate: "zoom-in-left",
    cssName: "react-query",
  },

  {
    name: "Responsive Design",
    icon: <FaMobileAlt size="25px" color="white" />,
    animinate: "zoom-in-left",
    cssName: "responsive",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    animinate: "zoom-in-down",
    cssName: "git",
  },

  {
    name: "C++",
    icon: <TbBrandCpp size="25px" color="white" />,
    animinate: "zoom-in",
    cssName: "cpp",
  },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    animinate: "zoom-in-right",
    cssName: "problem-solving",
  },
];

const projects = [
  {
    name: "Country Information Explorer",
    link: "https://abirullah.github.io/Countery-app-for-infromation/",
    github: "https://github.com/Abirullah/Countery-app-for-infromation",
    description:
      "Powered by a reliable API, Country Information Explorer delivers trustworthy data, making it a go-to resource for educators, professionals, and trivia enthusiasts alike. Its blend of educational value and practical utility fosters a deeper appreciation for global diversity. Download now to embark on a journey of discovery—where every tap brings you closer to understanding the world’s nations, their stories, and their place in our interconnected planet.",
    image: GlobalShare,
    imgAniminate: "zoom-in-up",
    buttonAniminate: "zoom-in",
    nameAnimate: "zoom-in-left",
    descriptionAnimate: "zoom-in-right",
  },
  {
    name: `Todo List`,
    link: "https://Abirullah.github.io/react-todo-app",
    github: "https://github.com/Abirullah/react-todo-app",
    description:
      "A todo list is a simple and effective tool for managing tasks and increasing productivity. It's essentially a list of items that you need to accomplish, often prioritized and organized in a way that helps you stay on track. Todo lists can be as simple as a handwritten list on a piece of paper or as sophisticated as a digital app with features like reminders, due dates, and progress tracking. By creating and maintaining a todo list, you can gain a clear overview of your tasks, reduce stress, and improve your overall efficiency.",
    image: Todo,
    imgAniminate: "zoom-in-up",
    buttonAniminate: "zoom-in",
    nameAnimate: "zoom-in-left",
    descriptionAnimate: "zoom-in-right",
  },
  {
    name: `Wather App`,
    link: "https://Abirullah.github.io/React-wather-app",
    github: "https://github.com/Abirullah/React-wather-app",
    description:
      "The weather app you developed leverages real-time data from APIs like OpenWeather or WeatherAPI to deliver accurate, location-based forecasts, displaying current conditions (temperature, humidity, wind speed). . Users can search for weather data by city name.  Built with RESTful API integration, error handling for data fetch issues, and unit customization (°C/°F), it prioritizes user-friendly access to essential meteorological insights. ",
    image: Wather,
    imgAniminate: "zoom-in-up",
    buttonAniminate: "zoom-in",
    nameAnimate: "zoom-in-left",
    descriptionAnimate: "zoom-in-right",
  },
];

function App() {
  const [state, handleSubmit] = useForm("xnjnznvd");
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ContactForm, setContactForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav} data-aos="flip-up">
        <a data-aos="flip-up" className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Abirullah</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1 data-aos="flip-up">HEY, I'M Abirullah</h1>
          <p data-aos="zoom-in-up">
            A Fullstack Web Developer building both the Frontend and Backend of
            Websites and Web Applications to deliver complete, robust, and
            scalable products.
          </p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="zoom-out-up">
              <DownloadButton>Download CV</DownloadButton>
            </div>
          </a>
        </div>
        <div className={style["scroll-icon"]} data-aos="zoom-in">
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/Abirullah"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            href="https://pk.linkedin.com/in/abir-afridi-2856a02b0"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            href="mailto:abirafridi87@gmail.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
          <a
            className={style.facebook}
            target="_blank"
            href="https://www.facebook.com/share/iPpuE83eD6ymf6PE/?mibextid=qi2Omg"
          >
            <BsFacebook size="30px" color="black" />
          </a>
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title} data-aos="zoom-in-down">
            About Me
          </h2>
          <p data-aos="zoom-in-up">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3 data-aos="zoom-in-right">Get to know me!</h3>
              <p data-aos="zoom-in-right">
                I'm a <span>Junior Full Stack Web Developer</span> passionate
                about building responsive, user-friendly websites and web
                applications that contribute to the success of the overall
                product. Check out some of my work in the <span>Projects</span>{" "}
                section. <br />
                <br />I enjoy sharing what I learn on my journey in{" "}
                <span>Web Development</span>, hoping it can help others in the
                Dev Community. Feel free to connect or follow me on{" "}
                <a href="https://github.com/Abirullah" target="_blank">
                  GitHub
                </a>
                , where I regularly post content related to development and
                programming. <br />
                <br />
                I'm currently open to <span>job opportunities</span> where I can
                contribute, grow, and continue learning. If you have a role that
                matches my skills and passion, don't hesitate to{" "}
                <span>contact</span> me.
              </p>
            </div>
            <div className={style["my-skill"]}>
              <h3 data-aos="zoom-in-left">My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                      data-aos={`${skill.animinate}`}
                    >
                      <div className={style["skill-name"]}>{skill.name}</div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title} data-aos="zoom-in-down">
            Projects
          </h2>
          <p data-aos="zoom-in-up">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => {
              return (
                <div key={`project${index}`} className={style.project}>
                  <div className={style["project-image"]}>
                    <img
                      src={project.image}
                      alt="Project Image"
                      data-aos={`${project.imgAniminate}`}
                    />
                  </div>
                  <div className={style["project-info"]}>
                    <h3 data-aos={`${project.nameAnimate}`}>{project.name}</h3>
                    <p data-aos={`${project.descriptionAnimate}`}>
                      {project.description}
                    </p>
                    <div
                      className={style["project-buttons"]}
                      data-aos={`${project.buttonAniminate}`}
                    >
                      <IconButton
                        width="170px"
                        height="50px"
                        backgroundColor="var(--primary-main)"
                        color="white"
                        link={project.link}
                        icon={<AiOutlineEye size="25px" color="white" />}
                      >
                        Live Demo
                      </IconButton>
                      <IconButton
                        width="100px"
                        height="50px"
                        backgroundColor="black"
                        color="white"
                        link={project.github}
                        icon={<AiFillGithub size="25px" color="white" />}
                      >
                        Github
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      {ContactForm ? (
        <div id="Contact" className={style.contact}>
          <div className={style.container}>
            <h2 className={style.title} data-aos="zoom-in-down">
              Contact
            </h2>

            <p data-aos="zoom-in-up">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>

            {state.succeeded ? (
              <p className={style.success}>
                ✅ Thank you! Your message has been sent successfully.
              </p>
            ) : (
              <>
                <form
                    onSubmit={handleSubmit}
                  data-aos="zoom-in-up"
                  className={clsx({
                    [style["inactive-form"]]: state.submitting,
                  })}
                >
                  <InputField
                    width="700px"
                    height="40px"
                    name="name"
                    placeholder="Enter Your Name"
                    label="Name"
                    type="text"
                    required
                  />

                  <InputField
                    width="700px"
                    height="40px"
                    name="email"
                    placeholder="Enter Your Email"
                    label="Email"
                    type="email"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <TextAreaField
                    width="700px"
                    height="250px"
                    name="message"
                    placeholder="Enter Your Message"
                    label="Message"
                    required
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <SubmitButton
                    icon={<RiSendPlaneFill size="20px" color="white" />}
                    width="200px"
                    height="60px"
                    color="white"
                    backgroundColor="var(--primary-main)"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Submit"}
                  </SubmitButton>

                  {state.submitting && (
                    <div className={style.loader}>
                      <Loader />
                    </div>
                  )}
                </form>
                
                <p
                  data-aos="zoom-in-up"
                  className="flex justify-center items-center mt-15"
                  onClick={() => setContactForm(false)}
                >
                  <FormOpenButton
                      Text="close Contact Form"
                      rotation="0deg"
                      
                  />
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div id="Contact" className={style.contact}>
          <div className={`${style.container} text-center`}>
            <h2 className={style.title} data-aos="zoom-in-down">
              Contact
            </h2>

            <p data-aos="zoom-in-up">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
            <p
              data-aos="zoom-in-up"
              className="flex justify-center items-center mt-4"
              onClick={() => setContactForm(true)}
            >
              <FormOpenButton
                Text="Open Contact Form"
              />
            </p>
          </div>
        </div>
      )}

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3 data-aos="zoom-in-left">Abirullah</h3>
              <p data-aos="zoom-in-right">
                I'm a Junior Full Stack Web Developer with a passion for
                building user-friendly, responsive websites and web
                applications. From crafting clean, modern frontends to working
                on efficient backend functionality, I'm focused on learning,
                growing, and delivering solutions that make a real impact.
              </p>
            </div>
            <div className={style.social}>
              <h3 data-aos="zoom-in-up">Social</h3>
              <div className={style["social-icons"]}>
                <a
                  data-aos="zoom-in-left"
                  className={style.git}
                  target="_blank"
                  href="https://github.com/Abirullah"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  data-aos="zoom-in-up"
                  className={style.linkedin}
                  target="_blank"
                  href="https://pk.linkedin.com/in/abir-afridi-2856a02b0"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  data-aos="zoom-in-right"
                  className={style.gmail}
                  target="_blank"
                  href="mailto:abirafridi87@gmail.com?subject=SendMail&body=Description"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
                <a
                  data-aos="zoom-in-down"
                  className={style.facebook}
                  target="_blank"
                  href="https://www.facebook.com/share/iPpuE83eD6ymf6PE/?mibextid=qi2Omg"
                >
                  <BsFacebook size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
