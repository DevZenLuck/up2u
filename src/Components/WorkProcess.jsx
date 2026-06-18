import React from "react";
import classes from "./WorkProcess.module.css";
import data_analysis from "../Assets/Data_Analysis.png";
import script_development from "../Assets/Ad_Script_Development.png";
import ad_production from "../Assets/Ad_production.png";
import end_to_end_excellence from "../Assets/End-to-End_Excellence.png";

function WorkProcess() {
  return (
    <div className={classes.work_process}>
      <div className={classes.work_process_card}>
        <img src={data_analysis} alt="data_analysis" className={classes.work_process_card_img}/>
        <div className={classes.work_process_card_data}>
          <h2>Empowering Strategies: Market Insights & Data Analysis</h2>
          <p>
            We delve deep into your data and analyze market trends to craft
            strategies that resonate with your audience and align with your
            business goals.
          </p>
        </div>
      </div>
      <div className={classes.work_process_card}>
        <img src={script_development} alt="script_development" className={classes.work_process_card_img}/>
        <div className={classes.work_process_card_data}>
          <h2>Crafting Impactful Narratives: Ad Script Development</h2>
          <p>
            Our team of creative experts writes compelling ad scripts that
            captivate, engage, and leave a lasting impression.
          </p>
        </div>
      </div>
      <div className={classes.work_process_card}>
        <img src={ad_production} alt="ad_production" className={classes.work_process_card_img}/>
        <div className={classes.work_process_card_data}>
          <h2>Transforming Concepts into Reality: Ad Production</h2>
          <p>
            From ideation to execution, we bring your vision to life with
            cutting-edge technology and a focus on quality.
          </p>
        </div>
      </div>
      <div className={classes.work_process_card}>
        <img src={end_to_end_excellence} alt="end_to_end_excellence" className={classes.work_process_card_img}/>
        <div className={classes.work_process_card_data}>
          <h2>Your Satisfaction, Our Priority: End-to-End Excellence</h2>
          <p>
            We are committed to refining every detail until the final result
            exceeds your expectations and achieves your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
