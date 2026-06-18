import React from "react";
import classes from "./Header2.module.css";
import UP2U from "../Assets/UP2U_logo.png";
import left_arrow from "../Assets/corporate/left_Arrow.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.back}>
        <Link to="/">
          <img src={left_arrow} alt="Back button" />
        </Link>
      </div>
      <div className={classes.logo}>
        <img src={UP2U} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
