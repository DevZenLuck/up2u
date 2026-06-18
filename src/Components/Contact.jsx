import React, { useState } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import be from "../Assets/be_logo.png";
import facebook from "../Assets/facebook_logo.png";
import instagram from "../Assets/instagram_logo.png";
import linkedin from "../Assets/linkedin_logo.png";
import mail from "../Assets/mail_logo.png";
import whatsapp from "../Assets/whatsapp_logo.png";
import x from "../Assets/x_logo.png";
import youtube from "../Assets/youtube_logo.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8egjzx8",
        "template_g1roank",
        {
          name: formData.name,
          email: formData.email,
          number: formData.phone,
          message: formData.message,
        },
        "cnTwa_OQWQuy2jYeQ"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Thank you for your message!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send email", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className={classes.ContactPage}>
      <div className={classes.ContactPage_main}>
        <div className={classes.area}>
          <ul className={classes.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={classes.absolute}>
          <h1 className={classes.ContactHeading}>Contact Us</h1>
          <div className={classes.ContactFormContainer}>
            <form onSubmit={handleSubmit} className={classes.ContactForm}>
              <input
                type="text"
                name="name"
                placeholder="Company name"
                value={formData.name}
                onChange={handleChange}
                className={classes.InputField}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={classes.InputField}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={classes.InputField}
                required
              />
              <textarea
                name="message"
                placeholder="Project brief"
                value={formData.message}
                onChange={handleChange}
                className={classes.InputField}
                rows="5"
                required
              ></textarea>
              <button type="submit" className={classes.SubmitButton}>
                <b>Submit</b>
              </button>
            </form>
            <div className={classes.ContactInfo}>
              <p>Feel free to reach out through any of the platforms below:</p>
              <div className={classes.SocialMedia}>
                <a
                  href="https://wa.me/9392894805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={whatsapp} className={classes.contact_logos} />
                </a>
                <a
                  href="https://www.instagram.com/up2u_india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={instagram} className={classes.contact_logos} />
                </a>
                <a
                  href="https://youtube.com/@up2uvideoproduction?si=s66XuisNgbafThMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.SocialLink}
                >
                  <img src={youtube} className={classes.contact_logos} />
                </a>
              </div>
              <div className={classes.Map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3838.4020918217507!2d78.02249967513094!3d15.835450384810704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1735224846813!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
