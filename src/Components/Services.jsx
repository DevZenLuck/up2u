import React from "react";
import classes from "./Services.module.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className={classes.services}>
      <div className={classes.absolute}>
        <div className={classes.heading}>
          <h1 className={classes.heading_h1}>
            Discover the Magic Behind Our Creations
          </h1>
        </div>
        <div className={classes.main_services}>
          <div className={classes.row}>
            <div className={classes.sub_services_div}>
              <Link
                to="/CorporateFilms"
                className={`${classes.btn} ${classes.btn1}`}
              >
                <span>Corporate Films</span>
                <i></i>
              </Link>
              <p className={classes.card_p}>
                Transform your brand with our top-tier corporate video
                production. From bespoke videos and TV commercials to stunning
                2D/3D animations, motion graphics, and photography, we craft
                visual stories that captivate and elevate your brand's impact.
              </p>
            </div>
            <div className={classes.sub_services_div}>
              <Link
                to="/ProductShowcase"
                className={`${classes.btn} ${classes.btn1}`}
              >
                <span>Product Showcase</span>
                <i></i>
              </Link>
              <p className={classes.card_p}>
                Boost your sales with captivating, interactive product demos
                that showcase your product's excellence. Engage customers
                effortlessly and drive unmatched conversions with presentations
                designed to leave a lasting impact and highlight your product's
                brilliance.
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.sub_services_div}>
              <a href="#" className={`${classes.btn} ${classes.btn3}`}>
                <span>Commercial Ads</span>
                <i></i>
              </a>
              <p className={classes.card_p}>
                Our commercial video services set new standards, blending
                cutting-edge innovation with flawless execution. We craft
                visually stunning stories that captivate, engage, and drive
                transformative results, ensuring your brand stands out in a
                competitive market.
              </p>
            </div>
            <div className={classes.sub_services_div}>
              <a href="#" className={`${classes.btn} ${classes.btn4}`}>
                <span>Motion Graphics</span>
                <i></i>
              </a>
              <p className={classes.card_p}>
                Combining precision design with artistic vision, our motion
                graphics elevate global brands. Using cutting-edge software like
                After Effects and Cinema 4D, we push creative boundaries,
                delivering stunning, innovative visuals that leave a lasting
                impression and set industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
