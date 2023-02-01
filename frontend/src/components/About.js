import React from "react";
import "../css/About.css";
// import AboutImage from "../Assets/face.jpg";
import AboutImageTop from "../Assets/help.jpg";

export const About = () => {
  return (
    <div className="parent-about">
      <div className="about-heading">Learning and Teaching together</div>
      <div className="about-desc">
        <div className="image-about-parent">
          <img src={AboutImageTop} alt="" className="image-about-top" />
        </div>
        <div className="text-about">
          <p>
            At stutea we believe in making every learner a teacher. That is
            exactly what our name signifies! Stu-dent + tea-cher.
          </p>
          <p>
            We a group of college students came up with the idea of providing
            students with a platform wherein they can post their doubts and
            solve other students’ doubts. This concept would result in quicker
            doubt resolution along with simple solutions because the student
            solving doubts will be having similar knowledge and resources!
          </p>
        </div>
      </div>
      <div className="developers-heading">More about STUTEA developers</div>
    </div>
  );
};
