import AboutSection from "./AboutSection";
import "./App.css";
import Header from "./Header";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const homeSectionRef = useRef();
  const projectsSectionRef = useRef();
  const aboutSectionRef = useRef();
  const [currentSection, setCurrentSection] = useState("home");
  useEffect(() => {
    window.onscroll = () => {
      const windowHeight = window.innerHeight;
      if (
        homeSectionRef.current.getBoundingClientRect().top <
        windowHeight / 2
      ) {
        setCurrentSection("home");
      }
      if (
        projectsSectionRef.current.getBoundingClientRect().top <
        windowHeight / 2
      ) {
        setCurrentSection("projects");
      }
      if (
        aboutSectionRef.current.getBoundingClientRect().top <
        windowHeight / 2
      ) {
        setCurrentSection("about");
      }
    };
  }, []);
  return (
    <>
      <Header sectionUnderline={currentSection}></Header>
      <HomeSection ref={homeSectionRef}></HomeSection>
      <ProjectsSection ref={projectsSectionRef}></ProjectsSection>
      <AboutSection ref={aboutSectionRef}></AboutSection>
    </>
  );
}

export default App;
