import "./ProjectsSection.css";
import instagramPdfFile from "./assets/instagram_voter.pdf";
import vrPdfFile from "./assets/vr_research_paper.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
export default React.forwardRef(function ProjectsSection(props, ref) {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  const createProjectObj = (title, link, current) => {
    return { title, link, current };
  };
  const dataRelatedProjects = [
    createProjectObj(
      "Chinese Numbers Classifier",
      "https://colab.research.google.com/drive/1musHO2MxJauhDpSBT4cKsXmhNp7VuuPO?usp=sharing",
      false
    ),
    createProjectObj(
      "ITS: Recommendations",
      "recommender.html",
      false
    )
  ];
  const fullStackWebApps = [
    createProjectObj(
      "Learn Bundle",
      "https://github.com/RichardZhangCS/learn-bundle",
      false
    ),
    createProjectObj(
      "Data Converter",
      "https://data-converter.vercel.app/",
      false
    ),
    createProjectObj("Rewardr", "https://devpost.com/software/rewardr", false)
  ];
  const research = [
    createProjectObj(
      "VR Veteran Mental Health Education",
      vrPdfFile
    ),
    createProjectObj("Instagram and Voter Mobilization", instagramPdfFile),
  ];
  const videoGames = [
    createProjectObj(
      "Ruins of Bronzagor",
      "https://drive.google.com/drive/folders/1wNfUuG6R3zQQ3hssI2Q2uaW4VQw5UW-V"
    ),
  ];
  return (
    <section ref={ref} id="projects">
      {props.children}
      <div className="container d-flex flex-md-row-reverse flex-column">
        <div
          data-aos="fade-left"
          className="w-50 d-inline-block align-self-center project-title-container"
        >
          <h1 className="section-title me-md-3 text-start text-md-end">
            Projects
          </h1>
        </div>
        <div className="w-50 all-project-container text-center text-md-start">
          <h2 data-aos="fade-right" data-aos-delay="50">
            Data Related Projects
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="65"
            className="project-container text-center"
          >
            {dataRelatedProjects.map((project) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={project.title}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
          <h2 data-aos="fade-right" data-aos-delay="50" className="mt-3">
            Full Stack Web Applications
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="65"
            className="project-container text-center"
          >
            {fullStackWebApps.map((project) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={project.title}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
          <h2 data-aos="fade-right" data-aos-delay="80" className="mt-3">
            Research Projects
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="95"
            className="project-container text-center"
          >
            {research.map((project) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={project.title}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
          <h2 data-aos="fade-right" data-aos-delay="110" className="mt-3">
            Video Games
          </h2>
          <div
            data-aos="fade-right"
            data-aos-delay="125"
            className="project-container text-center"
          >
            {videoGames.map((project) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={project.title}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
