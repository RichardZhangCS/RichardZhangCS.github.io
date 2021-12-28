import "./Header.css";

export default function Header({ sectionUnderline }) {
  return (
    <header>
      <nav className="nav-bar transparent d-flex align-items-center justify-content-between w-100 px-5 shadow flex-column flex-sm-row">
        <div
          className={
            "navbar-item" + (sectionUnderline === "home" ? " selected" : "")
          }
        >
          <a href="#home">HOME</a>
        </div>
        <div
          className={
            "navbar-item" + (sectionUnderline === "projects" ? " selected" : "")
          }
        >
          <a href="#projects">PROJECTS</a>
        </div>
        <div
          className={
            "navbar-item" + (sectionUnderline === "about" ? " selected" : "")
          }
        >
          <a href="#about">ABOUT</a>
        </div>
      </nav>
    </header>
  );
}
