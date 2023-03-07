import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Achievements", logoSrc: "trophy.png" },
    { label: "Projects and Publications", logoSrc: "programming-skills.svg" },
    { label: "Volunteering", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 95 },
    { skill: "C", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "DSA", ratingPercentage: 82 },
    { skill: "React", ratingPercentage: 78 },
    { skill: "Express JS", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const achievements = [
    {
      title: "Standardized Testing",
      description: "Secured 333/340 in Graduate Record Examination (GRE) with a perfect score of 170/170 in Quants",
      duration: { fromDate: "2020", toDate: "NA" },
    },
    {
      title: "Academic Excellence ",
      description: "Honored with a rank-certificate for attaining 3rd Rank in under graduations Final-Year (GPA: 9.94)",
      duration: { fromDate: "2020", toDate: "NA" },
    },
    {
      title: "Academic Award ",
      description: "Bestowed with a cash award for achieving 2nd Rank in under graduations Third-Year (GPA: 9.85)",
      duration: { fromDate: "2019", toDate: "NA" },
    },
    {
      title: "Appreciation Award ",
      description: "Received an appreciation letter acknowledging research aptitude, issued by program coordinator, TUS",
      duration: { fromDate: "2018", toDate: "NA" },
    },
    {
      title: "Best Student Award ",
      description: "Felicitated as the (youngest) best student in the ECE department, Ural Federal University, Russia",
      duration: { fromDate: "2017", toDate: "NA" },
    },
  ];

  const volunteerDetails = [
    {
      title: "Women in Computer Science @UIUC",
      duration: { fromDate: "2022 - ", toDate: "Present" },
      description:
        "Mentoring young women (freshmen and sophomores) to navigate through the IT industry",
    },
    {
      title: "Raheja Garden Sports and Cultural Association",
      duration: { fromDate: "2014 - ", toDate: "2022" },
      description:
        "Organizing Cultural events on a grand scale for over 700 families",
    },
    {
      title: "Social Wing RAIT ",
      duration: { fromDate: "2016 - ", toDate: "2020" },
      description:
        "Organizing Marathons to promote fitness, and raising funds for education of underpriviliged children",
    },
    {
      title: "Rotract Club of Thane Garden City ",
      duration: { fromDate: "2013 - ", toDate: "2016" },
      description:
        "As the sports director, I organized sporting events for members, ranging from children to elderly",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Illinois @Urbana-Champaign (MCS)"}
        subHeading={"Currently pursing my Masters in Computer Science"}
        fromDate={"2022 - "}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"University of Mumbai (B.Tech EXTC)"}
        subHeading={
          "CGPA: 9.41/10, Major GPA: 9.74/10, Senior Junior GPA: 9.89/10"
        }
        fromDate={"2016 - "}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School (K9 to K12)"}
        subHeading={["CS Grade in K12: 186/200, ", "\n in K10: A"]}
        fromDate={"2012 - "}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <div className="my-carousel">
      <Carousel variant="fade">
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/ion.png")} />
            <Card.Body>
              <Card.Title>Systems Emgineer (2020-2022)</Card.Title>
              <Card.Text>
                Developed Operating System Applications using Python for conducting Online and Lan-Based Assessments in a secure manner
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/tata.png")} />
            <Card.Body>
              <Card.Title>SDE Intern (2 Months)</Card.Title>
              <Card.Text>
              Developed an intelligent electricity grid portal using MERN Stack that can work with Smart solar meters and IoT devices
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/jio.png")} />
            <Card.Body>
              <Card.Title>ML Intern (2 Months)</Card.Title>
              <Card.Text>
              Worked on predicting the rate of churn amongst Jio sim card users and forecasting the employee attrition rate for Jio employees over the next financial year.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/zoom.png")} />
            <Card.Body>
              <Card.Title>Full Stack Dev Intern (2 Months)</Card.Title>
              <Card.Text>
              Worked with the product and design team to develop specific components to improve the existing User Interface
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/Cognologix.png")} />
            <Card.Body>
              <Card.Title>Web Dev Intern (2 Months)</Card.Title>
              <Card.Text>
              Designed and developed a recruitment portal to streamline talent acquisition for Cognologix. 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

<div className="resume-screen-container" key="achievements">
{achievements.map((achievements, index) => (
  <ResumeHeading
    key={index}
    heading={achievements.title}
    description={achievements.description}
    fromDate={achievements.duration.fromDate}
    toDate={' '}
  />
))}
</div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <div className="experience-container">
      <div className="my-carousel">
      <Carousel variant="fade">
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/re.png")} />
            <Card.Body>
              <Card.Title>
                <a href="https://ieeexplore.ieee.org/abstract/document/9418030">
                  <button className="my-btn">View Publication</button>
                  </a>
                </Card.Title>
              <Card.Text>
                FRIES: Food Recommending Intelligence Enabled System
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/ed.jpg")} />
            <Card.Body>
            <Card.Title>
                <a href="https://www.itm-conferences.org/articles/itmconf/abs/2020/02/itmconf_icacc2020_03027/itmconf_icacc2020_03027.html">
                  <button className="my-btn">View Publication</button>
                  </a>
                </Card.Title>
              <Card.Text>
              EduChain: Motivation Theory based Education Model using Blockchain  
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="my-card">
          <Card>
            <Card.Img variant="top" src={require("../../assets/Home/gd2.jpg")} />
            <Card.Body>
            <Card.Title>
                <a href="https://ieeexplore.ieee.org/abstract/document/9388374">
                  <button className="my-btn">View Publication</button>
                  </a>
                </Card.Title>
              <Card.Text>
              Slide+ : Virtual Reality game for helping children on the ASD spectrum
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="volunteering">
      {volunteerDetails.map((volunteerDetails, index) => (
    <ResumeHeading
    key={index}
    heading={volunteerDetails.title}
    description={volunteerDetails.description}
    fromDate={volunteerDetails.duration.fromDate}
    toDate={volunteerDetails.duration.toDate}
    />
))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Biography"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
