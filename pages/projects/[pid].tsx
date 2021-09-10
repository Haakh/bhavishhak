// import SEO from "../components/seo"
import React from "react";
import { useRouter } from "next/router";
import styles from "../pid.module.scss";
import Head from "next/head";
import { data } from "../../data";

const ProjectsDetailsPage = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;

  if (!pid) return null;

  return (
    <div className={styles.container} id={`projects/${pid as string}`}>
      <Head>
        <title>Bhavish Hak | Projects | {data.projects[Number(pid)].title}</title>
      </Head>

      <div className={styles.details}>
        <h3>{data.projects[Number(pid)].title}</h3>
        <div
          className={styles.imgContainer}
          style={{ cursor: data.projects[Number(pid)].link ? "pointer" : undefined }}
          onClick={() =>
            data.projects[Number(pid)].link ? window.open(data.projects[Number(pid)].link) : {}
          }
        >
          <img alt="image" src={data.projects[Number(pid)].image} className={styles.projectImg} />
        </div>
        <div className={styles.projDesc}>
          <div className={styles.projectTech}>
            {data.projects[Number(pid)].tech.map((tech) => (
              <h6 key={tech}>{tech}</h6>
            ))}
          </div>
        </div>

        <div className={styles.data}>
          {pid && <div>{data.projects[Number(pid)].desc}</div>}
          <br />
          {pid && (
            <div style={{ whiteSpace: "pre-wrap", marginLeft: 10 }}>
              {" "}
              {data.projects[Number(pid)].work}
            </div>
          )}
          <br />
          {pid && (
            <a href={data.projects[Number(pid)]?.link}>
              {data.projects[Number(pid)]?.link && `Link: `}{" "}
              {data.projects[Number(pid)]?.link || ""}
            </a>
          )}
          {pid && (
            <a href={data.projects[Number(pid)]?.linkAndroid}>
              {data.projects[Number(pid)]?.linkAndroid && `Android: `}{" "}
              {data.projects[Number(pid)]?.linkAndroid || ""}
            </a>
          )}
        </div>
      </div>

      <div className={styles.footer}>© Bhavish Hak. All Rights Reserved</div>
    </div>
  );
};

export default ProjectsDetailsPage;
