import React, { useState } from "react";
import classes from "./Header.module.css";
import UP2U from "../Assets/UP2U_logo.png";
import menu from "../Assets/menu.png";

function Header({
  scrollToHome,
  scrollToAbout,
  scrollToMyWorks,
  scrollToServices,
  scrollToContact,
}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={UP2U} alt="Logo" />
      </div>
      <div className={`${classes.menu} ${menuVisible ? classes.menu_visible : ""}`}>
        <button className={classes.button} onClick={scrollToHome}>
          Home
        </button>
        <button className={classes.button} onClick={scrollToAbout}>
          About
        </button>
        <button className={classes.button} onClick={scrollToMyWorks}>
          My Works
        </button>
        <button className={classes.button} onClick={scrollToServices}>
          Services
        </button>
        <button
          className={`${classes.button} ${classes.anotherButton}`}
          onClick={scrollToContact}
        >
          Talk to us
        </button>
      </div>
      <button className={classes.menu_btn} onClick={toggleMenu}>
        <img src={menu} className={classes.menu_icon} alt="Menu Icon" />
      </button>
    </div>
  );
}

export default Header;
