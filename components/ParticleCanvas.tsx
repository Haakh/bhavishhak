import React from "react";
import styles from "./ParticleCanvas.module.scss";

const ParticleCanvas = () => {
  return (
    <div className={styles.container}>
      {[...Array(200)].map(() => (
        <div className={styles.c}></div>
      ))}
    </div>
  );
};

export default ParticleCanvas;
