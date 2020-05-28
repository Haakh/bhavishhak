import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import styles from "./Header.module.scss";
import Vector from "assets/vector.svg";

const addResponsiveness = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

const Header = () => {
  const [darkMode, toggleMode] = useState(false);
  useEffect(() => {
    const persistedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
    if (persistedDarkMode === true) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    toggleMode(persistedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    toggleMode(!darkMode);
    localStorage.setItem("DARK_MODE", !darkMode as any);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topnav}>
        <a
          href="javascript:void(0);"
          role="button"
          className={[styles.icon, darkMode ? styles.item : styles.itemDark].join(" ")}
          // onClick={() => addResponsiveness()}
        >
          {/* <FaBars /> */}
        </a>
        <div className={styles.item}>
          <a href="/">About Me</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#skills">Skills</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#services">Services</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#experiences">Experience</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#projects">Projects</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#education">Education</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#contacts">Contacts</a>
          <Vector className={styles.itemUnderline} />
        </div>
      </div>
      <div className={styles.theme}>
        {darkMode ? (
          <WiDaySunny onClick={toggleDarkMode} className={styles.toggleMode} />
        ) : (
          <FaMoon onClick={toggleDarkMode} size={25} className={styles.toggleMode} />
        )}
      </div>
    </header>
  );
};

export default Header;
