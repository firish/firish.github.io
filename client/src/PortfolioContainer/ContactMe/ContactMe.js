import React, { useState } from "react";
import Typed from "react-typed";

import imgBack from "../../../src/images/contact.jpg";
import linktree from "../../../src/images/rsg29.png";
import wave from "../../../src/images/contact.gif";
import mail from "../../../src/images/mailbox.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Profile/Footer/footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Want To Hire Me ?"} title={"Contact Me !"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {/* <Typed
              strings={[
                "📧☎️🤝 Connect.",
                "📧☎️🤝 Collaborate.",
                "📧☎️🤝 Co-Create."
              ]}
              typeSpeed={75}
              backSpeed={75}
              loop
            /> */}
          </h2>{" "}
          <a href="https://www.linkedin.com/in/rishigulati29/">
            <i className="fa fa-linkedin-square fa-3x" />
          </a>
          <a href="https://www.facebook.com/rishi.gulati1/">
            <i className="fa fa-facebook-square fa-3x" />
          </a>
          <a href="https://scholar.google.com/scholar?scilib=1&hl=en&as_sdt=0,5">
            <i className="fa fa-google-plus-square fa-3x" />
          </a>
          <a href="https://github.com/firish?tab=repositories">
            <i className="fa fa-github-square fa-3x" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            {/* <h4>HIRE ME</h4> */}
            <h4>{" "}</h4>
            <img src={wave} alt="image not found" />
          </div>
          <div className="img-back">
            <h4>SCAN MY LINKTREE</h4>
            <img src={linktree} alt="image not found" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
