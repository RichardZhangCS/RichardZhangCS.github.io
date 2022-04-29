import headShot from "./headshot.jpg";
import "./HomeSection.css";
import React from "react";
import ParticleBackground from "./Particles";
export default React.forwardRef(function HomeSection(props, ref) {
  return (
    <section ref={ref} id="home">
      {props.children}
      <ParticleBackground style={{ width: "100%" }}></ParticleBackground>
      <div className="d-flex align-items-center h-100 justify-content-center flex-column flex-md-row">
        <div className="introduction ps-3 w-50 text-center text-md-end">
          <h1 className="m-auto section-title" id="name">
            RICHARD ZHANG
          </h1>
          <p className="h2 ps-1" id="title">
            {"CS Student at Georgia Tech"}
          </p>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/richardzhang-rz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin text-white"></i>
            </a>
            <a
              href="https://github.com/RichardZhangCS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github text-white"></i>
            </a>
            <a
              href="tel:832-359-4651"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-mobile text-white"></i>
            </a>
            <a
              href="mailto: richardzhang1303@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope text-white"></i>
            </a>
          </div>
        </div>
        <div className="w-50 h-100 d-flex align-items-center justify-content-center headshot-container">
          <img src={headShot} alt="Richard Zhang" id="headshot" />
        </div>
      </div>
    </section>
  );
});
