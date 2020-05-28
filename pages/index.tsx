// import SEO from "../components/seo"
import { Header, SectionTitle, ParticleCanvas } from "components/index";
import { data } from "../data";
import { FaGithub, FaMedium, FaTwitter, FaLinkedin, FaEnvelope, FaMap } from "react-icons/fa";
import styles from "./index.module.scss";

const Skills = () => (
  <div className="section" id="skills">
    <div className="secondSection">
      <SectionTitle
        title="Professional Skills"
        desc={`I'm a Senior Mobile/Web App Developer specializing in front end
          development. I have experience with all stages of the development cycle
          for dynamic web/mobile projects. I'm well-versed in numerous
          technologies including JavaScript, TypeScript and NodeJS. I have a
          strong background in project management and customer relations.
      `}
      />
      <div className="skillBox">
        <div className="skillItem">
          {data.skills.slice(0, 3).map((skillItem) => (
            <div className="column" style={{ width: "100%", margin: "10px" }} key={skillItem.title}>
              <span style={{ color: "#fff" }}>{skillItem.title}</span>
              <div className="progressBarWrapper">
                <div className="progressBar" style={{ width: skillItem.rating }} />
              </div>
            </div>
          ))}
        </div>
        <div className="skillItem">
          {data.skills.slice(3, 6).map((skillItem) => (
            <div className="column" style={{ width: "100%", margin: "10px" }} key={skillItem.title}>
              <span style={{ color: "#fff" }}>{skillItem.title}</span>
              <div className="progressBarWrapper">
                <div className="progressBar" style={{ width: skillItem.rating }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  const { education } = data;
  return (
    <div className="section" id="education">
      <SectionTitle
        title="Education"
        desc={`I'm a Computer Science graduate and possess a bachelors degree in the
        field of Engineering specializing in Information Technology. I had
        Science and Computers as majors in High School.
      `}
      />
      <div className="experienceContainer">
        <div className="experienceItem">
          <div className="expBox">
            <h3>{education[0].degree}</h3>
            <p className="expDuration">({education[0].duration})</p>
            <h4>{education[0].institution}</h4>
            <h4 className="boxSubTitle">{education[0].location}</h4>
          </div>
        </div>
        <div style={{ width: "10%" }} />
        <div className="experienceItem expGap">
          <div className="expBox">
            <h3>{education[1].degree}</h3>
            <p className="expDuration">({education[1].duration})</p>
            <h4>{education[1].institution}</h4>
            <h4 className="boxSubTitle">{education[1].location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const AboutMe = () => (
  <div className={styles.aboutMe}>
    <div className={styles.myPic}>
      <img alt="bhavish" className={styles.profilePic} src="/bhavish.jpg" />
    </div>

    <div className={styles.myDesc}>
      <div className={styles.section1}>Hello, I'm Bhavish</div>
      <div className={styles.section2}>Full Stack Developer</div>
      <p className={styles.sectionDesc}>
        I'm a Full Stack JavaScript Developer. I make cool Mobile Apps and Websites. Check them out
        below.
      </p>
      <div className={styles.row}>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://www.linkedin.com/in/shruti-shankar-3314b562/")}
        >
          <FaLinkedin className={styles.icon} />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://github.com/shrutishankar28")}
        >
          <FaGithub />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://medium.com/@shrutishankar_57908")}
        >
          <FaMedium />
        </div>
        <div
          className={styles.iconContainer}
          onClick={() => window.open("https://twitter.com/shrutishankar28")}
        >
          <FaTwitter />
        </div>
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
    <div className={styles.section} id="projects">
      <SectionTitle
        title="Projects"
        desc={`I have designed, developed and deployed multiple mobile applications and
        websites over a period of 4 years. I have contributed in both front-end
        as well as back-end development. A few of them are in production. The
        links are attached with the project description below:
      `}
      />
      <div className={styles.projectsRow}>
        {projects.map((item) => (
          <div className={styles.projectsBox} key={item.image}>
            {/* <Img
              fadeIn={true}
              alt={item.image}
              objectFit="contain"
              className={styles.projectImg}
              fluid={imagesData[item.image].childImageSharp.fluid}
            /> */}
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

const Services = () => (
  <div className={styles.section} style={{ backgroundColor: "#f3f5ff" }} id="services">
    <SectionTitle
      title="What I do"
      desc={`I’m a full-stack web/mobile application developer and I have been
          working in React/React Native for 4+ years. I’ve mostly worked with
          startups and have been freelancing since last 1.5 years.
        `}
    />
    <div className={styles.techBox}>
      {data.allServices.map((service) => (
        <div className={styles.column} key={service.imgSrc}>
          {/* <Img
              fluid={imagesData[service.imgSrc].childImageSharp.fluid}
              alt={service.imgSrc}
              fadeIn={true}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "20px",
              }}
              objectFit="contain"
            /> */}
          <p className={styles.boxTitle}>{service.title}</p>
          {service.desc}
        </div>
      ))}
    </div>
  </div>
);

const IndexPage = () => {
  if (typeof window !== "undefined") {
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
        <AboutMe />
        <div id="header" className={styles.headerClass}>
          <Header />
        </div>
      </div>
      <div className={styles.scroll}>
        <Skills />
        <Services />
        <Experiences />
        <Projects />
        <Education />
        <Contacts />
      </div>
    </div>
  );
};

export default IndexPage;
