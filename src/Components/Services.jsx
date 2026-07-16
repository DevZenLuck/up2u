import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Services.module.css";

function Services() {
  const navigate = useNavigate();

  return (
    <div className={classes.services}>
      <div className={classes.content}>
        <h2 className={classes.heading}>What We Offer</h2>
        <p className={classes.subheading}>
          Crafting Visual Stories That{" "}
          <span className={classes.highlight}>Elevate Your Brand</span>
        </p>
        <p className={classes.description}>
          At <strong>UP2U</strong>, we specialize in turning bold ideas into
          unforgettable visual experiences. From corporate films and cinematic
          commercials to motion graphics and product showcases — every frame we
          create is built to captivate, connect, and leave a lasting impression.
          <span className={classes.caption}>
            {" "}Your story deserves to be seen. Let's make it unforgettable.
          </span>
        </p>
        <div className={classes.btn_wrapper}>
          <button className={classes.btn} onClick={() => navigate("/my-works")}>
            <i></i>
            <span>Explore My Works</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
