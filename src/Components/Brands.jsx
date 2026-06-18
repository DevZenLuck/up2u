import React, { useEffect } from "react";
import classes from "./Brands.module.css";
import brands_1 from "../Assets/bRANDS_1.png";
import brands_2 from "../Assets/bRANDS_2.png";

function Brands() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector(
      `.${classes["marquee-content"]}`
    );

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className={classes.brands_page}>
      <div className={classes.marquee}>
        <ul className={classes["marquee-content"]}>
          <li>
            <img src={brands_1} alt="Kritunga" />
          </li>
          <li>
            <img src={brands_2} alt="Kritunga" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brands;
