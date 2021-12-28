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
            Full Stack Developer
          </p>
        </div>
        <div className="w-50 h-100 d-flex align-items-center justify-content-center">
          <img src={headShot} alt="Richard Zhang" id="headshot" />
        </div>
      </div>
    </section>
  );
}
