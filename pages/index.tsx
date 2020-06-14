// import SEO from "../components/seo"
import React from "react";
import { Header, ParticleCanvas } from "components/index";
import { data, ProjectType } from "../data";
import {
  FaGithub,
  FaMedium,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaInstagramSquare,
} from "react-icons/fa";
import styles from "./index.module.scss";
import Head from "next/head";

const Home = () => (
  <div className={styles.home} id="home">
    <div className={styles.tag1}>{renderTags("<html>")}</div>
    <div className={styles.tag2}>{renderTags("<head>")}</div>
    <div className={styles.tag3}>{renderTags("</head>")}</div>
    <div className={styles.myPic}>
      <img alt="bhavish" className={styles.profilePic} src="/bhavish.jpg" />
    </div>

    <div className={styles.myDesc}>
      <div className={styles.section1}>Bhavish Hak</div>
      <div className={styles.section2}>Full Stack Developer | Freelancer</div>
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
    <div className={styles.aboutContent}>
      <div className={styles.tag4}>{renderTags("<body>")}</div>
      <div className={styles.tag5}>{renderTags("<h1>")}</div>
      <div className={styles.sectionHeader}>ABOUT ME</div>
      <div className={styles.aboutDesc}>
        <div className={styles.aboutDetails}>
          <h1>Hi, I'm Bhavish</h1>
          <h2>I'm a Passionate Web/Mobile Developer</h2>
          <div className={styles.sectionDesc}>
            I am a Full Stack web/mobile application developer with a Bachelors of Engineering in
            Computer Science and I have been working on React/React Native and numerous other
            technologies such as NodeJS and AWS for 4+ years. I have mostly worked with startups and
            have been freelancing since last 2 years. I have a strong background in project
            management and customer relations. I have developed multiple apps from scratch in
            various domains like healthcare, retail, transport, employee management, etc.
            <p>
              I Started freelancing to work remotely on a diverse set of projects and to explore the
              world.
            </p>
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img alt="bhavish" className={styles.profilePic2} src="/bhavish2.jpg" />
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className={styles.skills} id="skills">
    <div className={styles.skillsContent}>
      <div className={styles.sectionHeader}>SKILLS</div>
      <div className={styles.skillBox}>
        <div className={styles.progressBox} id="test">
          <div className={`${styles.dev1} ${styles.dev}`}>Front-End</div>
          <div className={`${styles.dev2} ${styles.dev}`}>Back-End</div>
          <div className={`${styles.dev3} ${styles.dev}`}>Dev-Ops</div>
        </div>
        <div className={styles.skillProgress}>
          {data.skills.map((skillItem) => (
            <div className={styles.skillCard} key={skillItem.title}>
              <div className={styles.skillCircle}>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles.backStroke} cx="70" cy="70" r="60" />
                  <circle
                    className={[styles.stroke, styles[`html${skillItem.rating}`]].join(" ")}
                    cx="70"
                    cy="70"
                    r="60"
                    strokeDashoffset="377"
                  />
                  <circle
                    className={[styles.hoverCircle, styles[`html${skillItem.rating}`]].join(" ")}
                    strokeDashoffset="377"
                    cx="70"
                    cy="70"
                    r="60"
                  />
                  <circle className={styles.transformCircle} cx="70" cy="70" r="60" />
                </svg>
              </div>
              <div className={styles.circleContent}>
                <div className={styles.skillIcon}>{skillItem.icon}</div>
                <div className={styles.skillRating}>{`${skillItem.rating}`}%</div>
              </div>
              <div className={styles.skillText}>{`${skillItem.title}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const projectContent = (item: ProjectType) => (
  <>
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
        {item.tech.slice(0, 4).map((tech) => (
          <h6 key={tech}>{tech}</h6>
        ))}
      </div>
    </div>
  </>
);

const Projects = () => {
  const { projects } = data;
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projectsContent}>
        <div className={styles.sectionHeader}>PROJECTS</div>
        <div className={styles.projectsRow}>
          {projects.slice(0, 4).map((item) => (
            <div className={styles.projectBox} key={item.title}>
              <div className={styles.projectBack}>
                <div className={`${styles.projectContent} ${styles.projectContentLeft}`}>
                  {projectContent(item)}
                </div>
                <div className={`${styles.projectContent} ${styles.projectContentRight}`}>
                  {projectContent(item)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.flipButton}>
          <div className={styles.viewMore}>
            <div className={styles.viewMoreFront}>VIEW MORE</div>
            <div className={styles.viewMoreBack}>VIEW MORE</div>
          </div>
        </div>
      </div>
      <div className={styles.dividerLine} />
    </div>
  );
};

const Experiences = () => {
  const { experiences } = data;

  return (
    <div className={styles.experience} id="experiences">
      <div className={styles.experienceContent}>
        <div className={styles.expHeader}>EXPERIENCE</div>
        <div className={styles.experienceBox}></div>
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
                <div
                  className={`${styles.timeContainer} ${
                    (index + 1) % 2 ? styles.leftTime : styles.rightTime
                  }`}
                >
                  {exp.duration}
                </div>
                <div className={styles.content}>
                  <h2>
                    <a href={exp.link}>{exp.company}</a>
                  </h2>
                  <h3>{exp.designation}</h3>
                  <p>{exp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.dividerLine} />
    </div>
  );
};

const Contacts = () => (
  <div className={styles.contacts} id="contacts">
    <div className={styles.contactBox}></div>
    <div className={styles.tag6}>{renderTags("</body>")}</div>
    <div className={styles.tag7}>{renderTags("</html>")}</div>
    <div className={styles.sectionHeader}>CONTACT ME</div>
    <div className={styles.contactInfo}>
      <a className={styles.contactTitle} href="mailto:hakbhavish@gmail.com">
        <div className={styles.column}>
          <FaEnvelope className={styles.contactIcon} />
        </div>
      </a>
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
  // if (typeof window !== "undefined") {
  //   let options = {
  //     root: document.querySelector("#scrollArea"),
  //     rootMargin: "200px",
  //     threshold: 1.0,
  //   };

  //   let observer = new IntersectionObserver(() => console.log("Hello intersection"), options);

  //   let target = document.getElementById("test");
  //   console.log("target", target);
  //   observer.observe(target);
  // }

  return (
    <div className={styles.container} id="root">
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
        <Skills />
        <Projects />
        <Experiences />
        <Contacts />
      </div>
      <div className={styles.footer}>© Bhavish Hak. All Rights Reserved</div>
    </div>
  );
};

export default IndexPage;
