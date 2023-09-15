import "./about.css";
import Award from "../../img/award.png";
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
          including HTML, CSS, JavaScript, React, Next.js, Typescript, Node.js,
          and SQL. Experienced working on various projects alongside
          implementing version control with Git. My approach to software
          development is guided by agile methodologies and a strong emphasis on
          collaboration within teams. Working as a team to elevate the field of
          web development and creating impact solutions.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Award</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
