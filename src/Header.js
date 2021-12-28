import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar transparent d-flex align-items-center justify-content-around w-100 px-5 shadow">
        <div className="navbar-item selected">
          <a href="#home">HOME</a>
        </div>
        <div className="navbar-item">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="navbar-item">
          <a href="#about">ABOUT</a>
        </div>
      </nav>
    </header>
  );
}
