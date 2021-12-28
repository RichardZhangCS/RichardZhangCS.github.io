import "./AboutSection.css";
import resume from "./assets/resume.pdf";
export default function AboutSection() {
  return (
    <section id="about">
      <div className="container d-flex">
        <div className="w-50 d-inline-block align-self-center">
          <h1 className="section-title me-3 text-end">About</h1>
        </div>
        <div className="w-50 ps-3">
          <p className="lead">
            Hello! I am currently an aspiring full-stack web developer hoping to
            create a career full of impact. Every day, I strive to fill any
            personal gap in web development knowledge, moving towards a strong
            mastery of both the front-end and back-end. Through my passion for
            software development, I hope to invigorate positive change for both
            my local community and for the globe.
          </p>
          <p className="lead">
            Being both a Georgia Tech CS student and a member of the Global
            Leadership LLC, I plan to unite my software skills and desire to
            solve the world's greatest challenges. Many of those suffering from
            the biggest problems are left without a voice, so I hope that my
            developed software and technologies would provide such a voice.
          </p>
          <a href={resume} download className="download-link">
            My resume (pdf 88kb)
          </a>
        </div>
      </div>
    </section>
  );
}
