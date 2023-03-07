import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS = {
    description:
      "Adios! I have 2 years of professional experience developing softwares. I am a Full stack developer with background knowledge of MERN and MEAN stacks. Additionally, I also have experience developing desktop application using Python. I am enthusiastic to understand, learn, and practice different development methodologies.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive Front End as per the design",
        "React and Angular",
        "Python Application Development",
        "Building and working with REST APIs",
        "Applied Machine Learning",
        "Database Management",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return( 
    SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ))
    );
  };

  return(
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"Skills"} subHeading={"Why You Should Choose Me!"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span className="justify">{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn2 primary-btn2"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me! {" "}
              </button>
              <a href="resume.pdf" download="Rishi-Resume.pdf">
                <button className="btn2 highlighted-btn2 ext2">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
