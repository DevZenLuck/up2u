import React, { useEffect, useState, useRef } from "react";
import classes from "./About.module.css";
import servicesImage from "../Assets/camara_man.png";
import client_satisfaction from "../Assets/Clients_Satisfaction.png";
import clients from "../Assets/Clients.png";
import mrr from "../Assets/MRR.png";
import saas_clients from "../Assets/SAAS_Clients.png";
import videos_produced from "../Assets/Videos_produced.png";
import logo_Design from "../Assets/Logo_designs.png";
import ScrambleText from "./ScrambleText";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div className={classes.services} ref={servicesRef}>
      <div className={classes.main_services}>
        <div
          className={`${classes.image} ${
            isVisible ? "animate-slide-from-left" : "hidden"
          }`}
        >
          <img
            src={servicesImage}
            alt="Services"
            className={classes.image_img}
          />
        </div>

        <div className={classes.stats}>
          <div
            className={`${classes.row_1} ${
              isVisible ? "animate-slide-from-bottom" : "hidden"
            }`}
          >
            <div className={classes.block}>
              <img src={videos_produced} className={classes.image_icon} />
              <ScrambleText text="  300+" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}>Videos produced</p>
            </div>
            <div className={classes.block}>
              <img src={saas_clients} className={classes.image_icon} />
              <ScrambleText text="    6+" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}>Saas Clients</p>
            </div>
            <div className={classes.block}>
              <img src={clients} className={classes.image_icon} />
              <ScrambleText text="   50+" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}> Business Clients</p>
            </div>
          </div>

          <div
            className={`${classes.row_2} ${
              isVisible ? "animate-slide-from-bottom" : "hidden"
            }`}
          >
            <div className={classes.block}>
              <img src={mrr} className={classes.image_icon} />
              <ScrambleText text="2x MRR" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}>within 5 month's</p>
            </div>
            <div className={classes.block}>
              <img src={logo_Design} className={classes.image_icon} />
              <ScrambleText text="   20+" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}>Logo Designs</p>
            </div>
            <div className={classes.block}>
              <img src={client_satisfaction} className={classes.image_icon} />
              <ScrambleText text="  100%" className={classes.icon_h2} trigger={isVisible} />
              <p className={classes.icon_p}>Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
