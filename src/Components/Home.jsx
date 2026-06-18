import React from "react";
import classes from "./Home.module.css";
import video from "../Assets/UP2U_video.mp4";

function Home({ scrollToServices }) {
  return (
    <div className={classes.Home}>
      <div className={classes.Hero}>
        <div className={classes.HeroVideoContainer}>
          <video
            src={video}
            className={classes.HeroVideo}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className={classes.TotalContainer}>
          <div className={classes.HeroContent}>
            <h1 className={classes.Heading}>
              Visuals that redefine perceptions
            </h1>
            <div className={classes.container} onClick={scrollToServices}>
              <a href="#" className={classes.btn}>
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
