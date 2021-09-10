// import SEO from "../components/seo"
import React from "react";
import styles from "../index.module.scss";
import Head from "next/head";
import { Projects } from "pages";

const ProjectsPage = (): JSX.Element => {
  return (
    <div className={styles.container} id="root">
      <Head>
        <title>Bhavish Hak | Projects</title>
      </Head>

      <Projects newPage />
      {/* <div className={styles.background}>Hello</div> */}
      {/* <div className={styles.scroll}></div> */}
      <div className={styles.footer}>© Bhavish Hak. All Rights Reserved</div>
    </div>
  );
};

export default ProjectsPage;
