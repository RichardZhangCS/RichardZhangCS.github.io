import "./AboutSection.css";
import resume from "./assets/resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
export default React.forwardRef(function AboutSection(props, ref) {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  return (
    <section ref={ref} id="about">
      {props.children}
      <div className="container d-flex flex-md-row flex-column">
        <div
          data-aos="fade-right"
          className="w-50 d-inline-block align-self-center about-title-container"
        >
          <h1 className="section-title me-3 text-end">About</h1>
        </div>
        <div
          data-aos="fade-left"
          className="w-50 ps-3 about-description-container"
        >
          <p className="lead">
          Hello! I am a first-year computer science major at the Georgia Institute of Technology. 
          I plan to specialize in Intelligence and Information Internetworks. I have interests in 
          Web Development, Data Science, Data Engineering, and Software Engineering.
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            My resume (pdf 88kb)
          </a>
        </div>
      </div>
    </section>
  );
});
