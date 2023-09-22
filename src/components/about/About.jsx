import "./about.css";
import cv from "../../img/cv.png";
import AboutMe from "../../img/laptop.gif"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutMe} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Proficient in cutting-edge web technologies like React, Node.js, and
          SQL, I specialize in agile-driven software development and foster
          collaborative excellence within teams, all while creating impactful
          web solutions.
        </p>
        <p className="a-desc">
          Actively developing web applications using the latest technologies,
          including <b>HTML, CSS, JavaScript, React, Next.js, Node.js, Typescript</b>, and <b>SQL</b>.
          Experienced working on various projects alongside implementing version
          control with Git. My approach to software development is guided by
          agile methodologies and a strong emphasis on collaboration within
          teams.Working as a team to elevate the field of web
          development and creating impact solutions.
        </p>
        <div className="a-cv">
          <img src={cv} alt="" className="a-cv-img" />
          <div className="a-cv-texts">
            <h4 className="a-cv-title">My CV</h4>
            <p className="a-cv-desc">
              Feel free to review my CV to gain a comprehensive understanding of
              my qualifications, experiences, and the skills I bring to the
              table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
