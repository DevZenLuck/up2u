import React from "react";
import classes from "./Testimonial.module.css";

function Testimonial() {
  return (
    <div class={classes.container}>
      <div class={classes.row}>
        <div class={`${classes["col-md-offset-2"]} ${classes["col-md-8"]}`}>
          <div id="testimonial-slider" class={classes.owl-carousel}>
            <div class={classes.testimonial}>
              <div class={classes.pic}>
                <img
                  src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                  alt=""
                  class={classes.img-responsive}
                />
              </div>
              <h3 class={classes.testimonial-info}>
                krystal
                <small>Web Developer</small>
              </h3>
              <p class={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                facilisis.
              </p>
            </div>

            <div class={classes.testimonial}>
              <div class={classes.pic}>
                <img
                  src="http://www.markharwood.plus.com/images/people%20large/people8.jpg"
                  alt=""
                  class={classes.img-responsive}
                />
              </div>
              <h3 class={classes.testimonial-info}>
                Diana
                <small>Web Designer</small>
              </h3>
              <p class={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
