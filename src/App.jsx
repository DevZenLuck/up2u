import React, { useRef } from "react";
import "./App.css";
import Cursor from "./Components/Cursor";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import MyWorks from "./Components/MyWorks";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Brands from "./Components/Brands";
import WorkProcess from "./Components/WorkProcess";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const myWorksRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Cursor />
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToMyWorks={() => scrollToSection(myWorksRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
      />

      <div ref={homeRef}>
        <Home
          scrollToServices={() => scrollToSection(servicesRef)}
        />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div>
        <WorkProcess />
      </div>
      <div ref={myWorksRef}>
        <MyWorks />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
