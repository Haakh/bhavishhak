// import SEO from "../components/seo"
import React from "react";
import { Header, ParticleCanvas } from "components/index";
import { data } from "../data";
import {
  FaGithub,
  FaMedium,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaInstagramSquare,
} from "react-icons/fa";
import styles from "./index.module.scss";
import Chart from "chart.js";
import Head from "next/head";

const chartData = {
  datasets: [
    {
      data: [50, 30, 20],
      fill: "origin",
      backgroundColor: ["rgba(0,0,255,0.5)", "blue", "green"],
    },
  ],
  labels: ["FrontEnd", "Backend", "Designing"],
};

const Progress = ({ skill }) => (
  <div className={styles.progress}>
    <div className={styles.skillName}>{skill.title}</div>
    <div className={styles.tagContainer}>
      <div className={[styles.skillsTag, styles[`html${skill.rating}`]].join(" ")}></div>
    </div>
  </div>
);

const Home = () => (
  <div className={styles.home} id="home">
    <div className={styles.tag1}>{renderTags("<html>")}</div>
    <div className={styles.tag2}>{renderTags("<head>")}</div>
    <div className={styles.tag3}>{renderTags("</head>")}</div>
    <div className={styles.myPic}>
      <img alt="bhavish" className={styles.profilePic} src="/bhavish.jpg" />
    </div>

    <div className={styles.myDesc}>
      <div className={styles.section1}>Hello, I'm Bhavish</div>
      <div className={styles.section2}>Full Stack Developer | Freelancer</div>
      <p className={styles.sectionDesc}>
        I make cool Mobile Apps and Websites. Check them out below.
      </p>
      <div className={styles.row}>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://www.linkedin.com/in/bhavishhak/", "_self")}
        >
          <FaLinkedin className={styles.icon} />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://github.com/Haakh", "_self")}
        >
          <FaGithub />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://medium.com/@bhavishhak", "_self")}
        >
          <FaMedium />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://twitter.com/BhavishHak", "_self")}
        >
          <FaTwitter />
        </div>
      </div>
    </div>
  </div>
);

const AboutMe = () => (
  <div className={styles.aboutMe} id="about">
    <div className={styles.tag4}>{renderTags("<body>")}</div>
    <div className={styles.tag5}>{renderTags("<h1>")}</div>
    <div className={styles.sectionHeader}>ABOUT ME</div>
    <div className={styles.sectionDesc}>
      I am a Full Stack web/mobile application developer with a Bachelors of Engineering in Computer
      Science and I have been working on React/React Native and numerous other technologies such as
      TypeScript and NodeJS for 4+ years. I have mostly worked with startups and have been
      freelancing since last 2 years. I have a strong background in project management and customer
      relations. I have developed multiple apps from scratch in various domains like healthcare,
      retail, transport, employee management, etc.
    </div>
    <div className={styles.sectionHeader}>SKILLS</div>
    <div className={styles.skillBox}>
      <div className={styles.skillChart}>
        <canvas id="myChart" width="100" height="100"></canvas>
      </div>
      <div className={styles.skillProgress}>
        {data.skills.map((skillItem) => (
          <Progress skill={skillItem} key={skillItem.title} />
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { projects } = data;
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.sectionHeader}>PROJECTS</div>
      <div className={styles.projectsRow}>
        {projects.slice(0, 4).map((item) => (
          <div className={styles.projectsBox} key={item.image}>
            <div className={styles.imgContainer}>
              <img src={item.image} className={styles.projectImg} />
            </div>
            <div
              className={styles.projDesc}
              style={{ cursor: item.link ? "pointer" : undefined }}
              onClick={() => (item.link ? window.open(item.link) : {})}
            >
              <h3>{item.title}</h3>
              <div className={styles.projectTech}>
                {item.tech.map((tech) => (
                  <div key={tech} className={styles.techTag}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.viewMore}>VIEW MORE</div>
    </div>
  );
};

const Experiences = () => {
  const { experiences } = data;

  return (
    <div className={styles.experience} id="experiences">
      <div className={styles.sectionHeader}>Experience</div>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => {
          const classN = styles[`box${index}`];
          return (
            <div
              key={exp.company}
              className={`${styles.expContainer} ${
                (index + 1) % 2 ? styles.left : styles.right
              } ${classN}`}
            >
              <div className={styles.content}>
                <h2>{exp.company}</h2>
                <h3>{exp.designation}</h3>
                <h4>{exp.duration}</h4>
                <p>{exp.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Contacts = () => (
  <div className={styles.contacts} id="contacts">
    <div className={styles.sectionHeader}>Contact Me</div>
    <div className={styles.contactInfo}>
      <div className={styles.column}>
        <a className={styles.contactTitle} href="mailto:hakbhavish@gmail.com">
          <FaEnvelope className={styles.contactIcon} />
        </a>
      </div>
      <div
        className={styles.column}
        onClick={() => window.open("https://www.linkedin.com/in/bhavishhak/", "_self")}
      >
        <FaLinkedin className={styles.contactIcon} />
      </div>
      <div
        className={styles.column}
        onClick={() => window.open("https://www.instagram.com/bhavishhak/", "_self")}
      >
        <FaInstagramSquare className={styles.contactIcon} />
      </div>
      <div
        className={styles.column}
        onClick={() => window.open("https://twitter.com/BhavishHak", "_self")}
      >
        <FaTwitter className={styles.contactIcon} />
      </div>
    </div>
  </div>
);

const renderTags = (text) => (
  <div className="tag" id="tag">
    {text}
  </div>
);

const IndexPage = (): JSX.Element => {
  if (typeof window !== "undefined") {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: "pie",
      data: chartData,
      options: {},
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=La+Belle+Aurore" rel="stylesheet" />
      </Head>
      {/* <SEO title="bhavish" /> */}
      <ParticleCanvas />
      <div className={styles.background}>
        <Home />
        <Header />
      </div>
      <div className={styles.scroll}>
        <AboutMe />
        <Projects />
        <Experiences />
        <Contacts />
      </div>
      <div className={styles.footer}>© Bhavish Hak. All Rights Reserved</div>
    </div>
  );
};

export default IndexPage;
