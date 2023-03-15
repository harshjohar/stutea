import React from "react";
import "../css/About.css";
// import AboutImage from "../Assets/face.jpg";
import AboutImageTop from "../Assets/help.jpg";

export const About = () => {
  return (
    <div className="parent-about dark-text">
      <div className="about-heading">Learning and Teaching together</div>
      <div className="about-desc about-card-1">
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
      <div className="about-heading">More about StuTea </div>
      <div
        className="about-features feautures_containers about-card-2"
      >
        <div className="developers-heading">What it does? </div>
        <div className="features_content">
          <div className="image-about-parent">
            <img
              src={AboutImageTop}
              alt=""
              className="image-about-top"
              style={{ borderRadius: "15rem" }}
            />
          </div>
          <div className="text-about">
            <p>
              StuTea is a one stop solution to getting your doubts solved on a
              number of topics. Users can register and have an initial score of
              1000 credits that they can redeem when their doubts get
              successfully resolved. This would transfer credits to the account
              of the person solving doubts. This provides an incentive to the
              one solving doubts.
            </p>

            <p>
              The questions will be sorted using tags. The tags will help the
              one solving doubt to anchor his areas of expertise and solve
              doubts effectively.
            </p>

            <p>
              Once the doubt is resolved the user will get a notification
              through which they can check the answer and rate the person who
              solved it. This would help in keeping a track of good doubt
              solvers and eliminate the ones who don’t provide quality answers.
            </p>
          </div>
        </div>
      </div>
      <div
        className="about-features-2 feautures_containers about-card-3"
        style={{ background: "" }}
      >
        <div className="developers-heading">What's next for StuTea </div>
        <div className="features_content">
          <div className="text-about">
            <p>
              As software engineers, we're never fully satisfied with the work.
              There are always more ways to make the product better, faster,
              more secure, accessible, etc. Here are some product features that
              we would love to implement in the future:
            </p>
            <p>
              <ul>
                <li>
                  Use of voice medium and A/V recordings to answer doubts.
                </li>
                <li>
                  Involvement of real time monetary transactions to buy/sell
                  credits.
                </li>
                <li>
                  A more equipped shop to induce business into the product.
                </li>
                <li>
                  Extending our existing one-to-one answering product to
                  one-to-many version.
                </li>
                <li>
                  An efficient search mechanism which will include search by
                  tags/question and many more.
                </li>
                <li>
                  We also aim to create an efficient feedback system to
                  authentify the credit/decredit system.
                </li>
              </ul>
            </p>
          </div>
          <div className="image-about-parent">
            <img
              src={AboutImageTop}
              alt=""
              className="image-about-top"
              style={{ borderRadius: "15rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
