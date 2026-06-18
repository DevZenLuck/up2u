import React from "react";
import classes from "./MyWorks.module.css";
import Product_Films from "../Assets/Product_Films.png";
import Corporate_films from "../Assets/Corporate_films.png";
import Documentaries from "../Assets/Documentaries.png";
import educational_videos from "../Assets/educational_videos.png";
import photograpy from "../Assets/photograpy.png";
import Interior_videos from "../Assets/Interior_videos.png";
import Ad_Films from "../Assets/Ad_Films.png";
import Live from "../Assets/Live.png";
import logo_Design from "../Assets/logo_Design.png";
import Graphic_Design from "../Assets/Graphic_Design.png";
import Podcast from "../Assets/Podcast.png";
import web_development from "../Assets/web_development.png";
import Digital_Portfolios from "../Assets/Digital_Portfolios.png";
import Motion_Graphics from "../Assets/Motion_Graphics.png";
import d_animation from "../Assets/d_animation.png";

function MyWorks() {
  return (
    <div className={classes.my_works}>
      <div className={classes.my_works_title}>Our Expertise</div>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.logo_div}>
            <img src={Product_Films} className={classes.logo} />
            <h2 className={classes.h2}>Product Films</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Corporate_films} className={classes.logo} />
            <h2 className={classes.h2}>Corporate Films</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Documentaries} className={classes.logo} />
            <h2 className={classes.h2}>Documentaries</h2>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.logo_div}>
            <img src={educational_videos} className={classes.logo} />
            <h2 className={classes.h2}>Educational Videos</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={photograpy} className={classes.logo} />
            <h2 className={classes.h2}>Product Films</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Interior_videos} className={classes.logo} />
            <h2 className={classes.h2}>Photograpy</h2>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.logo_div}>
            <img src={Ad_Films} className={classes.logo} />
            <h2 className={classes.h2}>Ad Films</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Live} className={classes.logo} />
            <h2 className={classes.h2}>Live</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={logo_Design} className={classes.logo} />
            <h2 className={classes.h2}>Logo Design</h2>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.logo_div}>
            <img src={Graphic_Design} className={classes.logo} />
            <h2 className={classes.h2}>Graphic Design</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Podcast} className={classes.logo} />
            <h2 className={classes.h2}>Podcast</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={web_development} className={classes.logo} />
            <h2 className={classes.h2}>Web development</h2>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.logo_div}>
            <img src={Digital_Portfolios} className={classes.logo} />
            <h2 className={classes.h2}>Digital Portfolios</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={Motion_Graphics} className={classes.logo} />
            <h2 className={classes.h2}>Motion Graphics</h2>
          </div>
          <div className={classes.logo_div}>
            <img src={d_animation} className={classes.logo} />
            <h2 className={classes.h2}>2d / 3d Animation</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
