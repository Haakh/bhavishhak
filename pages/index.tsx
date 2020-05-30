// import SEO from "../components/seo"
import { Header, SectionTitle, ParticleCanvas } from "components/index";
import { data } from "../data";
import { FaGithub, FaMedium, FaTwitter, FaLinkedin, FaEnvelope, FaMap } from "react-icons/fa";
import styles from "./index.module.scss";
import Chart from "chart.js";

// svg image width="1212" height="704"

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
      <div className={styles.skillPercent}>{skill.rating}%</div>
    </div>
  </div>
);

const Contacts = () => (
  <div className="section" style={{ backgroundColor: "#f3f5ff", marginTop: "60px" }} id="contacts">
    <SectionTitle
      title="Contact Me"
      desc={` I'm available to work as a freelancer. You can reach me at any of
        the following.
      `}
    />
    <div className="contactInfo">
      <div className="column" style={{ marginRight: "10px" }}>
        {/* <FaEnvelope
          style={{ color: "#4667de", fontSize: "25px", marginBottom: "15px" }}
        /> */}
        <span className="contactTitle">EMAIL</span>
        <span className="contactDesc">shrutishankar28@gmail.com</span>
      </div>
      <div className="column" style={{ marginRight: "10px" }}>
        {/* <FaLinkedin
          style={{ color: "#4667de", fontSize: "25px", marginBottom: "15px" }}
        /> */}
        <span className="contactTitle">LINKED IN</span>
        <span className="contactDesc">shruti-shankar-3314b562</span>
      </div>
      <div className="column" style={{ marginRight: "10px" }}>
        {/* <FaMap
          style={{ color: "#4667de", fontSize: "25px", marginBottom: "15px" }}
        /> */}
        <span className="contactTitle">ADDRESS</span>
        <span className="contactDesc">Bengaluru, KA, India</span>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div className={styles.home} id="home">
    <div className={styles.tagHtml}>{renderTags("<html>")}</div>
    <div className={styles.tagHead}>{renderTags("<head>")}</div>
    <div className={styles.tagHeadClose}>{renderTags("</head>")}</div>
    <div className={styles.myPic}>
      <img alt="bhavish" className={styles.profilePic} src="/bhavish.jpg" />
    </div>

    <div className={styles.myDesc}>
      <div className={styles.section1}>Hello, I'm Bhavish</div>
      <div className={styles.section2}>Full Stack Developer | Freelancer</div>
      <p className={styles.sectionDesc}>
        I'm a Full Stack JavaScript Developer. I make cool Mobile Apps and Websites. Check them out
        below.
      </p>
      <div className={styles.row}>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://www.linkedin.com/in/bhavishhak/")}
        >
          <FaLinkedin className={styles.icon} />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://github.com/Haakh")}
        >
          <FaGithub />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://medium.com/@bhavishhak")}
        >
          <FaMedium />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://twitter.com/BhavishHak")}
        >
          <FaTwitter />
        </div>
      </div>
    </div>
  </div>
);

const AboutMe = () => (
  <div className={styles.aboutMe} id="about">
    <div className={styles.tagBody}>{renderTags("<body>")}</div>
    <div className={styles.tagH1}>{renderTags("<h1>")}</div>
    <div className={styles.sectionHeader}>ABOUT ME</div>
    <div className={styles.sectionDesc}>
      I’m a full-stack web/mobile application developer and I have been working in React/React
      Native for 4+ years. I’ve mostly worked with startups and have been freelancing since last 1.5
      years.
      <br />
      <br />
      <br />
      I'm a Senior Mobile/Web App Developer specializing in front end development. I have experience
      with all stages of the development cycle for dynamic web/mobile projects. I'm well-versed in
      numerous technologies including JavaScript, TypeScript and NodeJS. I have a strong background
      in project management and customer relations.
    </div>
    <div className={styles.skillsDesc}>
      Full Stack JavaScript Developer with ~4 years of experience in software development, I have
      worked with both service-based and product-based firms. Over time, I has worked in a couple of
      startups and have experience in working with technologies like React Native, ReactJS, NodeJS,
      ElasticSearch, etc. I've also developed multiple apps from scratch in various domains like
      healthcare, retail, transport, employee management, etc.
    </div>
    <div className={styles.skillsDesc}>
      Full Stack JavaScript Developer with ~4 years of experience in software development, I have
      worked with both service-based and product-based firms. Over time, I has worked in a couple of
      startups and have experience in working with technologies like React Native, ReactJS, NodeJS,
      ElasticSearch, etc. I've also developed multiple apps from scratch in various domains like
      healthcare, retail, transport, employee management, etc.
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

const Experiences = () => {
  const ExpImage = (props) => <div />;

  const { experiences } = data;
  return (
    <div className={styles.section} id="experiences">
      <SectionTitle
        title="Experience"
        desc={` I started my career as a Tech Support Engg and later switched to
      application development. I have worked with a few startups based in
      Bangalore and US. Got bored of daily travels and now I'm freelancing.
      `}
      />
      <div className={styles.experienceContainer}>
        <div className={styles.experienceItem}>
          <div className={styles.expBox}>
            <ExpImage imagName={experiences[0].logoImage} />
            <h3>{experiences[0].designation}</h3>
            <p className={styles.expDuration}>({experiences[0].duration})</p>
            {experiences[0].desc}
          </div>
          <div className={`${styles.expBox} ${styles.expGap}`}>
            <ExpImage imagName={experiences[1].logoImage} />
            <h3>{experiences[1].designation}</h3>
            <p className={styles.expDuration}>({experiences[1].duration})</p>
            {experiences[1].desc}
          </div>
        </div>
        <div style={{ width: "10%" }} />
        <div className={`${styles.experienceItem} ${styles.expGap}`}>
          <div className={styles.expBox}>
            <ExpImage imagName={experiences[2].logoImage} width={"100px"} />
            <h3>{experiences[2].designation}</h3>
            <p className={styles.expDuration}>({experiences[2].duration})</p>
            {experiences[2].desc}
          </div>
          <div className={`${styles.expBox} ${styles.expGap}`}>
            <ExpImage imagName={experiences[3].logoImage} />
            <h3>{experiences[3].designation}</h3>
            <p className={styles.expDuration}>({experiences[3].duration})</p>
            {experiences[3].desc}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = data;
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.sectionHeader}>PROJECTS</div>
      <div className={styles.sectionDesc}>
        I have designed, developed and deployed multiple mobile applications and websites over a
        period of 4 years. I have contributed in both front-end as well as back-end development. A
        few of them are in production. The links are attached with the project description below:
      </div>
      <div className={styles.projectsRow}>
        {projects.slice(0, 4).map((item) => (
          <div className={styles.projectsBox} key={item.image}>
            <img src={item.image} className={styles.projectImg} />
            <div
              className={styles.projDesc}
              style={{ cursor: item.link ? "pointer" : undefined }}
              onClick={() => (item.link ? window.open(item.link) : {})}
            >
              <h3>{item.title}</h3>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderTags = (text) => (
  <div className="tag" id="tag">
    {text}
  </div>
);

const IndexPage = () => {
  if (typeof window !== "undefined") {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: chartData,
      options: {},
    });

    window.onscroll = function () {
      myFunction();
    };

    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    const myFunction = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add(styles.sticky);
      } else {
        header.classList.remove(styles.sticky);
      }
    };
  }

  return (
    <div className={styles.container}>
      {/* <SEO title="bhavish" /> */}
      <ParticleCanvas />
      <div className={styles.background}>
        <Home />
        <div id="header" className={styles.headerClass}>
          <Header />
        </div>
      </div>
      <div className={styles.scroll}>
        <AboutMe />
        <Projects />
        <Experiences />
        <Contacts />
      </div>
      <div>© Bhavish Hak. All Rights Reserved</div>
    </div>
  );
};

export default IndexPage;
