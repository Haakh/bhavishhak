/* eslint @typescript-eslint/no-explicit-any: 0 */

import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import styles from "./Header.module.scss";
import Vector from "assets/vector.svg";

const Header = (): JSX.Element => {
  const [darkMode, toggleMode] = useState(false);
  const [isMobile, setMobileView] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    watchWindow();
    const persistedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE")) as boolean;
    if (persistedDarkMode === true) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    toggleMode(persistedDarkMode);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const menu = document.getElementById("menu");
      const height = window.innerHeight;
      menu.setAttribute("style", `height: ${height + 400}px`);
    }
  }, [isMobile]);

  const toggleDarkMode = () => {
    document.documentElement.setAttribute("data-theme", darkMode ? "light" : "dark");

    toggleMode(!darkMode);
    // eslint-disable-next-line
    localStorage.setItem("DARK_MODE", !darkMode as any);
  };

  const watchWindow = () => {
    const myFunction = (x: MediaQueryList) => {
      setMobileView(x.matches);
    };

    const x = window.matchMedia("(max-width: 700px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction as any); // Attach listener function on state changes
  };

  if (typeof window !== "undefined" && !isMobile) {
    const header = document.getElementById("header");
    if (header) {
      window.onscroll = function () {
        myFunction();
      };
      const sticky = header.offsetTop;
      const myFunction = () => {
        if (window.pageYOffset > sticky) {
          header.classList.add(styles.sticky);
        } else {
          header.classList.remove(styles.sticky);
        }
      };
    }
  }

  const menu = (
    <header id="header" className={styles.headerClass}>
      <div className={styles.topnav}>
        <div className={styles.item}>
          <a href="#about">ABOUT</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#skills">SKILLS</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#projects">PROJECTS</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#experiences">EXPERIENCE</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#education">BLOGS</a>
          <Vector className={styles.itemUnderline} />
        </div>
        <div className={styles.item}>
          <a href="#contacts">CONTACTS</a>
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

  const mobileMenu = (
    <div id="mobileMenu" className={`${styles.mobileMenu} ${styles.sticky}`}>
      <div
        onClick={() => setMenuOpen(!isMenuOpen)}
        className={`${styles.hamContainer} ${isMenuOpen && styles.hamToggle}`}
      >
        <div className={`${styles.ham}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="menu" className={`${styles.menu} ${isMenuOpen && styles.menuToggle}`}>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#experiences">EXPERIENCE</a>
        <a href="#education">BLOGS</a>
        <a href="#contacts">CONTACTS</a>
      </div>
    </div>
  );

  return isMobile ? mobileMenu : menu;
};

export default Header;
