import headShot from "./headshot.jpg";
import "./HomeSection.css";
export default function HomeSection() {
  return (
    <section id="home">
      <div className="d-flex align-items-center h-100 justify-content-center">
        <div className="introduction ps-3 w-50 text-end">
          <h1 className="m-auto section-title" id="name">
            RICHARD ZHANG
          </h1>
          <p className="h2 ps-1" id="title">
            {"CS Student & Full Stack Developer"}
          </p>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/richardzhang-rz/"
              className="fa fa-linkedin text-white"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/RichardZhangCS/"
              className="fa fa-github text-white"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="tel:832-359-4651"
              className="fa fa-mobile text-white"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="mailto: richardzhang1303@gmail.com"
              className="fa fa-envelope text-white"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
        <div className="w-50 h-100 d-flex align-items-center justify-content-center">
          <img src={headShot} alt="Richard Zhang" id="headshot" />
        </div>
      </div>
    </section>
  );
}
