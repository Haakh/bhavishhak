const experiences = [
  {
    company: "Freelance",
    logoImage: "freelancer",
    link: "https://geekyants.com/",
    designation: "Freelancer - Web/Mobile App Developer",
    duration: "Feb 2019 - Present",
    desc: `Self-employed, work for myself, rather than for a company.
     I take on contract work for companies and organizations usually on hourly basis (can be fixed price at times), based all across the globe. Have developed and delivered multiple mobile and web applications.`,
  },
  {
    company: "Geekyants",
    duration: "Nov 2016 - Feb 2019",
    designation: "Full Stack Developer",
    logoImage: "geekyants",
    link: "https://geekyants.com/",
    desc: `Worked on developing mobile and web applications with a team of
    developers and delivered quality applications. Adjusted software parameters to boost performance and incorporate
    new features. Maintained existing applications, designed and delivered new
    applications as well.`,
  },
  {
    company: "Gsynergy",
    designation: "Full Stack Developer",
    duration: "Feb 2019 - April 2020",
    logoImage: "gsynergyicon",
    link: "https://www.linkedin.com/company/gsynergy/",
    desc: `Worked as a freelance contractor. Delivered performance-driven and user-centric mobile application that met all
    business requirements.
    Collaborated on all stages of systems development lifecycle, from
    requirement gathering to production releases`,
  },
  {
    company: "Edureka",
    duration: "Aug 2016 - Oct 2016",

    designation: "Tech Support Engineer",
    logoImage: "edureka",
    link: "https://www.edureka.co/",
    desc: `Diagnosed and troubleshooted coding problems and helped customers install applications and programs to understand the course properly. 
    Resolved multiple issues, configured operating systms and remote desktop connections to provide immediate support.`,
  },
];

interface ProjectType {
  title: string;
  image: string;
  link?: string;
  linkAndroid?: string;
  tech: string[];
  desc: string;
  work: string;
}
const projects: ProjectType[] = [
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
    work: `- Worked as a Freelance Contractor for 1 year and 5 months
    - Developed the app as an offline-first app i.e when offline, the app would perform all the operations in the same way as online and sync it back when the user goes back online
    - Developed features that allow users to collect products and record additional information about them, inspirations, and trends from everywhere they shop (markets, social media, internet)
    - Involved in building a feature to allow group collaboration and search of products based on the certain attributes
    - Built a share extension that allows users to import images from other apps and websites
    `,
  },
  {
    title: "Pulse CX",
    image: "/cx.jpg",
    link: "https://apps.apple.com/in/app/pulse-cx/id1446431879",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.getdoctalk.reviewapp",
    tech: ["React Native", "RxJs", "NodeJS", "Firestore", "TypeScript"],
    desc: `Pulse CX is an app to manage the online presence and reputation of a business.`,
    work: `- Developed the entire Backend in Firebase/ Firestore and NodeJS hosted on Google Cloud
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
    work: `- Worked as the Full-stack Developer in a team of 6 for 1 year
    - Built the whole app from scratch using React Native
    - Designed the app and deployed ElasticSearch on AWS as it was a complicated process to secure the whole database
    - Collaborated on all stages of the systems development lifecycle with the team from requirement gathering to production releases
    `,
  },
  {
    title: "Nomu Kids",
    image: "/scheduler.jpg",
    link: "https://nomukids.com/",
    tech: ["ReactJS, JavaScript, Context-Hooks"],
    desc: `Nomu Kids is a home-based workout/ teaching for kids.`,
    work: `- Worked as Frontend Engineer in a team of 7 for 2 months
    - Developed booking classes dashboard, integrated Zoom, and payments module
    - Built <blank> modules using ReactJS
    - Used Context-Hooks to fetch and store the data from the server
    `,
  },
  {
    title: "Employee Management Web App",
    image: "/scheduler.jpg",
    tech: ["ReactJS", "NodeJS", "TypeScript", "Firestore"],
    desc: `It is an internal employee management web application.`,
    work: `- Developed the web app from scratch to managing Sales Manager's daily tasks
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
    work: `- Worked as a sole Full Stack Developer and built the app from scratch
    - Developed a feature that allows the users to add, view, edit, delete leads, events, clients, etc.
    - Built a feature that searches for items throughout the app, adds events & remainder, contacts to user's phone, adds other related relevant information for each lead, client, etc.
    `,
  },
  {
    title: "Wuji - Taxi App",
    image: "/wuji.jpg",
    link: "https://play.google.com/store/apps/details?id=com.wuji",
    tech: ["React Native", "Redux", "NodeJS", "Firestore", "Google Maps API"],
    desc: `An Uber-like taxi app with both rider and driver side with Geo-Spatial Search for nearby Drivers.`,
    work: `- Worked as a Sole Developer and built Backend and Frontend of the app
    - Built a feature that allows both rider and driver to use the app and an option to switch between them
    - Built a feature that shows the users about the real-time location of nearby drivers, to add a vehicle, to share promo code, and to rate a driver
    - Developed the payment options with Stripe API
    - Used Geo Spatial queries to detect nearby drivers and assign a driver to a rider based on a custom algorithm
    - Used Google Maps API to show map on the app and draw polygons to show driver locations, draw lines to show route path from rider to driver etc
    `,
  },
  {
    title: "Pixifi",
    image: "/pixifi.jpg",
    link: "https://apps.apple.com/in/app/pixifi-mobile/id1480772574",
    linkAndroid: "https://play.google.com/store/apps/details?id=com.tylerchurch.pixifiapp2",
    tech: ["React Native", "Redux", "React Navigation"],
    desc: `Pixifi is a CRM application for Photographers.`,
    work: `- Worked as a Sole Developer and built the Frontend of the app`,
  },
  {
    title: "NPM Chat Package",
    image: "/npmchat.jpg",
    link: "https://www.npmjs.com/package/geek-chat",
    tech: ["React Native", "Redux", "React Navigation"],
    desc: `Pixifi is a CRM application for Photographers.`,
    work: `- Worked as a Sole Developer and built the Frontend of the app`,
  },
  {
    title: "Foode",
    image: "/foode,jpg",
    tech: ["React Native", "Redux", "Firebase"],
    desc: `A restaurant discovery and rating app that helps to find top restaurants nearby you, share your experience by posting feeds, follow/unfollow users coupled with one-to-one chat feature.`,
    work: `- Worked as a Developer with a team of 3 and built the Frontend and Backend of the app`,
  },
];

const skills = [
  {
    title: "HTML5/CSS3",
    rating: "90",
  },
  {
    title: "JavaScript",
    rating: "90",
  },
  {
    title: "Typescript",
    rating: "85",
  },
  {
    title: "React.js",
    rating: "90",
  },
  {
    title: "Node.js",
    rating: "80",
  },
  {
    title: "React Native",
    rating: "95",
  },
  {
    title: "Firebase",
    rating: "95",
  },
  {
    title: "MongoDB",
    rating: "90",
  },
  {
    title: "MySql/PostgreSql",
    rating: "80",
  },
  {
    title: "ElasticSearch",
    rating: "80",
  },
  {
    title: "Amazon S3",
    rating: "90",
  },
  // {
  //   title: "Amazon DynamoDB",
  //   rating: "90",
  // },
  {
    title: "AppSync",
    rating: "90",
  },
  // {
  //   title: "AppCenter",
  //   rating: "95",
  // },
  {
    title: "App Engine",
    rating: "70",
  },
  {
    title: "Heroku",
    rating: "70",
  },
  // {
  //   title: "Docker",
  //   rating: "65",
  // },
];

export const data = {
  skills,
  projects,
  experiences,
};
