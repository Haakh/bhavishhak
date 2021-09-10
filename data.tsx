import { FaReact, FaHtml5, FaAws, FaNodeJs, FaDocker } from "react-icons/fa";
import { AiTwotoneFire } from "react-icons/ai";
import { DiMongodb, DiPostgresql, DiHeroku } from "react-icons/di";
import Typescript from "assets/typescript.svg";
import ElasticSearch from "assets/elasticsearch.svg";

export interface ExperienceType {
  company: string;
  designation: string;
  duration: string;
  link?: string;
  logoImage: string;
  desc: string;
}
const experiences: ExperienceType[] = [
  {
    company: "Freelance",
    designation: "Full Stack Web/App Developer",
    duration: "Feb'19 - Now",
    logoImage: "freelancer",
    desc: `Self-employed, Worked for startups, enterprise companies to develop and modularize their codebase and improved performance for their softwares. I take on contract work for companies and organizations usually on hourly basis, based all across the globe. Have developed and delivered multiple mobile and web applications.`,
  },
  {
    company: "Gsynergy",
    designation: "Full Stack Developer",
    duration: "Feb'19 - Apr'20",
    logoImage: "gsynergyicon",
    link: "https://www.linkedin.com/company/gsynergy/",
    desc: `Worked as a freelance contractor. Lead a team of developers, Delivered performance-driven and user-centric mobile application that met all
    business requirements.`,
  },
  {
    company: "DockTalk",
    designation: "Full Stack Developer",
    duration: "Mar'18 - Apr'19",
    logoImage: "doctalk",
    link: "https://www.crunchbase.com/organization/doctalk",
    desc: `Independently developed ElasticSearch Stack on AWS ELK. Worked on Firebase/Firestore and NodeJS.
    Developed React Apps from scratch for appointment scheduling, business reviews management, Employee management etc.`,
  },
  {
    company: "Geekyants",
    designation: "Full Stack Developer",
    duration: "Oct'16 - Mar'18",
    logoImage: "geekyants",
    link: "https://geekyants.com/",
    desc: `Worked on designed & developing mobile and web applications Full Stack and lead a team of
    developers and delivered quality applications. Adjusted software parameters to boost performance and incorporate
    new features.`,
  },
];

export interface ProjectType {
  title: string;
  image?: string;
  link?: string;
  linkAndroid?: string;
  tech: string[];
  desc: string;
  work: string;
}
const projects: ProjectType[] = [
  {
    title: "Cloud Connector",
    image: "/cc.png",
    link: "https://insightsoftware.com",
    tech: [
      "React Native",
      "TypeScript",
      "NodeJS",
      "Jest",
      "Redux",
      "Redux-Saga",
      "FireStore",
      "GCP",
    ],
    desc: `Cloud Connector is a Enterprise Web App from Insight Software which helps in migration of Databases from One Vendor to another`,
    work: `   - Worked as a Front End Web Developer
    - Developed the whole Web App from scratch
    - Migrated their legacy Desktop App to a modern looking and performant Web Application
    - Fully Accessible and performant web app with high data transfer rates and real time updates
    `,
  },
  {
    title: "Ferns N Petals",
    image: "/fnp.png",
    link: "https://fnp.com",
    tech: ["NextJS", "ReactJS", "Jest", "Redux", "Redux-Saga"],
    desc: `Ferns N Petals is a multinational Gifts and Experiences Delivery Service, e-commerce Company with millions of users`,
    work: `   - Worked as a Freelance Consultant for 1 year
    - Developed the website in NextJS
    - Worked on the Authentication, Payments Processing and Checkout flow.
    `,
  },
  {
    title: "Findz",
    image: "/findz.jpg",
    link: "https://apps.apple.com/in/app/findz/id1478000632",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.gsynergy.findz",
    tech: [
      "React Native",
      "TypeScript",
      "NodeJS",
      "Jest",
      "Redux",
      "Redux-Saga",
      "FireStore",
      "GCP",
    ],
    desc: `Findz is an app that allows the user to easily locate what they found at the market on social media, or the internet, and collaborate with their team in real-time.`,
    work: `   - Worked as a Freelance Contractor for 1 year and 5 months
    - Developed the app as an offline-first app i.e when offline, the app would perform all the operations in the same way as online and sync it back when the user goes back online
    - Developed features that allow users to collect products and record additional information about them, inspirations, and trends from everywhere they shop (markets, social media, internet)
    - Involved in building a feature to allow group collaboration and search of products based on the certain attributes
    - Built a share extension that allows users to import images from other apps and websites
    `,
  },
  {
    title: "Pulse CX",
    image: "/pulse.jpg",
    link: "https://apps.apple.com/in/app/pulse-cx/id1446431879",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.getdoctalk.reviewapp",
    tech: ["React Native", "RxJs", "NodeJS", "Firestore", "TypeScript"],
    desc: `Pulse CX is an app to manage the online presence and reputation of a business.`,
    work: `   - Developed the entire Backend in Firebase/ Firestore and NodeJS hosted on Google Cloud
    - Built a feature that allows business owners to get feedback from the clients of the business
    - Built the dashboard such that it shows daily, weekly, etc trends for the owners business
    - Collaborated on all stages of the systems development lifecycle, from requirement gathering to production releases
    `,
  },
  {
    title: "Pulse Scheduler",
    image: "/scheduler.jpg",
    link: "https://apps.apple.com/in/app/pulse-scheduler/id1448868994?l=hi",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.getdoctalk.scheduler",
    tech: ["React Native", "RxJs", "NodeJS", "Firestore", "TypeScript"],
    desc: `It is an appointment booking application for clinics and hospitals with patient tracking and dynamic schedule app.`,
    work: `   - Worked as the Full-stack Developer in a team of 6 for 1 year
    - Built the whole app from scratch using React Native
    - Designed the app and deployed ElasticSearch on AWS as it was a complicated process to secure the whole database
    - Collaborated on all stages of the systems development lifecycle with the team from requirement gathering to production releases
    `,
  },
  {
    title: "Wuji - Taxi App",
    image: "/wuji.jpg",
    link: "https://play.google.com/store/apps/details?id=com.wuji",
    tech: ["React Native", "Redux", "NodeJS", "Firestore", "Google Maps API"],
    desc: `An Uber-like taxi app with both rider and driver side with Geo-Spatial Search for nearby Drivers.`,
    work: `   - Worked as a Sole Developer and built Backend and Frontend of the app
    - Built a feature that allows both rider and driver to use the app and an option to switch between them
    - Built a feature that shows the users about the real-time location of nearby drivers, to add a vehicle, to share promo code, and to rate a driver
    - Developed the payment options with Stripe API
    - Used Geo Spatial queries to detect nearby drivers and assign a driver to a rider based on a custom algorithm
    - Used Google Maps API to show map on the app and draw polygons to show driver locations, draw lines to show route path from rider to driver etc
    `,
  },
  {
    title: "Nomu Kids",
    image: "/nomukids.jpg",
    link: "https://nomukids.com/",
    tech: ["ReactJS, JavaScript, Context-Hooks"],
    desc: `Nomu Kids is a home-based workout/ teaching for kids.`,
    work: `   - Worked as Frontend Engineer in a team of 7 for 2 months
    - Developed booking classes dashboard, integrated Zoom, and payments module
    - Built <blank> modules using ReactJS
    - Used Context-Hooks to fetch and store the data from the server
    `,
  },
  {
    title: "Employee Management Web App",
    tech: ["ReactJS", "NodeJS", "TypeScript", "Firestore"],
    desc: `It is an internal employee management web application.`,
    work: `   - Developed the web app from scratch to managing Sales Manager's daily tasks
    - Integrated the app with the Google Calendar
    - Integrated multiple 3rd party APIs and SDKs for auth, SMS, email, etc.
    `,
  },
  {
    title: "Cogmento CRM",
    image: "/cogmento.jpg",
    link: "https://apps.apple.com/us/app/cogmento/id1291380634",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.cogmento.app",
    tech: ["React Native", "Redux", "React Navigation"],
    desc: `Cogmento is a CRM application that easily manages the client list and prospective leads.`,
    work: `   - Worked as a sole Full Stack Developer and built the app from scratch
    - Developed a feature that allows the users to add, view, edit, delete leads, events, clients, etc.
    - Built a feature that searches for items throughout the app, adds events & remainder, contacts to user's phone, adds other related relevant information for each lead, client, etc.
    `,
  },
  {
    title: "Pixifi",
    image: "/pixifi.jpg",
    link: "https://apps.apple.com/in/app/pixifi-mobile/id1480772574",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.tylerchurch.pixifiapp2",
    tech: ["React Native", "Redux", "React Navigation"],
    desc: `Pixifi is a CRM application for Photographers.`,
    work: `   - Worked as a Sole Developer and built the Frontend of the app`,
  },
  {
    title: "Foode",
    tech: ["React Native", "Redux", "Firebase"],
    desc: `A restaurant discovery and rating app that helps to find top restaurants nearby you, share your experience by posting feeds, follow/unfollow users coupled with one-to-one chat feature.`,
    work: `   - Worked as a Developer with a team of 3 and built the Frontend and Backend of the app`,
  },
];

const skills = [
  {
    title: "React Native",
    rating: "95",
    icon: <FaReact />,
  },
  {
    title: "Firebase",
    rating: "95",
    icon: <AiTwotoneFire />,
  },
  {
    title: "HTML5/CSS3",
    rating: "90",
    icon: <FaHtml5 />,
  },
  {
    title: "React.js",
    rating: "90",
    icon: <FaReact />,
  },
  {
    title: "Amazon S3",
    rating: "90",
    icon: <FaAws />,
  },
  {
    title: "AppSync",
    rating: "90",
    icon: <FaAws />,
  },
  {
    title: "Typescript",
    rating: "85",
    icon: <Typescript />,
  },
  {
    title: "Node.js",
    rating: "80",
    icon: <FaNodeJs />,
  },
  {
    title: "MongoDB",
    rating: "80",
    icon: <DiMongodb />,
  },
  {
    title: "PostgreSql",
    rating: "80",
    icon: <DiPostgresql />,
  },
  {
    title: "ElasticSearch",
    rating: "80",
    icon: <ElasticSearch />,
  },
  {
    title: "Heroku",
    rating: "70",
    icon: <DiHeroku />,
  },
  {
    title: "Docker",
    rating: "65",
    icon: <FaDocker />,
  },
];

export const data = {
  skills,
  projects,
  experiences,
};
