import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header({ sectionUnderline }) {
  return (
    <Navbar expand="sm" className="transparent navbar-dark nav-bar w-100 p-0">
      <Container
        fluid
        className="h-100 align-items-md-center align-items-start pt-md-0 py-2"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between w-100">
            <div
              className={
                "navbar-item" + (sectionUnderline === "home" ? " selected" : "")
              }
            >
              <Nav.Link href="#home">HOME</Nav.Link>
            </div>
            <div
              className={
                "navbar-item" +
                (sectionUnderline === "projects" ? " selected" : "")
              }
            >
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
            </div>
            <div
              className={
                "navbar-item" +
                (sectionUnderline === "about" ? " selected" : "")
              }
            >
              <Nav.Link href="#about">ABOUT</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
