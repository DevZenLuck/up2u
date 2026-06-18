import React from "react";
import introVideo from "../Assets/UP2U_video.mp4";
import classes from "./CorporateVideo.module.css";
import MVS_logo from "../Assets/MVS_LOGO.jpg";

function CorporateVideo() {
  return (
    <div className={classes.container}>
      <div className={classes.image_div}>
        <img src={MVS_logo} alt="" className={classes.image} />
      </div>
      <div className={classes.CorporateVideo}>
        <div className={classes.video_div}>
          <iframe
            src="https://www.youtube.com/embed/jwTekR9TfiY"
            className={classes.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
        <div className={classes.video_div}>
          <video src={introVideo} controls className={classes.video}></video>
        </div>
      </div>
    </div>
  );
}

export default CorporateVideo;
