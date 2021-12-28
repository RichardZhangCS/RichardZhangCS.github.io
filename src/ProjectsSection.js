import "./ProjectsSection.css";
import pdfFile from "./assets/instagram_voter.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ProjectsSection() {
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  const createProjectObj = (title, link, current) => {
    return { title, link, current };
  };
  const fullStackWebApps = [
    createProjectObj(
      "Learn Bundle",
      "https://github.com/RichardZhangCS/learn-bundle",
      true
    ),
    createProjectObj(
      "Data Converter",
      "https://data-converter.vercel.app/",
      false
    ),
    createProjectObj("Rewardr", "https://devpost.com/software/rewardr", false),
    createProjectObj(
      "Local Library",
      "https://shielded-brook-73762.herokuapp.com/catalog",
      false
    ),
  ];
  const research = [
    createProjectObj(
      "VR Veteran Mental Health Education",
      "https://mymysteryprojects.com/assets/files/SDG4.pdf"
    ),
    createProjectObj("Instagram and Voter Mobilization", pdfFile),
  ];
  const videoGames = [
    createProjectObj(
      "Ruins of Bronzagor",
      "https://drive.google.com/drive/folders/1wNfUuG6R3zQQ3hssI2Q2uaW4VQw5UW-V"
    ),
  ];
  return (
    <section id="projects">
      <div className="container d-flex">
        <div className="w-50">
          <h2 data-aos="fade-right">Full Stack Web Applications</h2>
          <div data-aos="fade-right" className="project-container text-center">
            {fullStackWebApps.map((project, index) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={index}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
          <h2 data-aos="fade-right" className="mt-3">
            Research Projects
          </h2>
          <div data-aos="fade-right" className="project-container text-center">
            {research.map((project, index) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={index}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
          <h2 data-aos="fade-right" className="mt-3">
            Video Games
          </h2>
          <div data-aos="fade-right" className="project-container text-center">
            {videoGames.map((project, index) => (
              <div
                className="p-3 border project-button"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
                key={index}
              >
                <h3 className="">{project.title}</h3>
                {project.current && <p>Work in Progress</p>}
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-50 d-inline-block align-self-center"
        >
          <h1 className="section-title me-3 text-end">Projects</h1>
        </div>
      </div>
    </section>
  );
}
