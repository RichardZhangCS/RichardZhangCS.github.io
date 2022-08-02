import "./AboutSection.css";
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
          <h1 className="section-title ms-3 text-start">About</h1>
        </div>
        <div
          data-aos="fade-left"
          className="w-50 ps-3 about-description-container"
        >
          <p className="lead">
          Hello! I am a computer science major at the Georgia Institute of Technology. 
          I plan to specialize in Intelligence and Information Internetworks. I have interests in Web Development, 
          Data Science, Software Engineering, and Data Engineering.
          </p>
          <a
            href="https://docs.google.com/document/d/1OMX6UEIwx9TG_q5yk14_mFCONAt-qrw6xOukXa0AM0s/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            My resume (google docs)
          </a>
        </div>
      </div>
    </section>
  );
});
