import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
                border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Malick Ouedraogo, I work as a full stack developer at the
          IBM CIC in Baton Rouge, Louisiana. My experience in the industry as a
          full stack developer has equipped me with a strong foundation with
          RESTful api’s, responsive design, testing and debugging,
          microservices, web security, as well as cloud based development.
          Having been a part of an agile development team, I gained
          collaborative skills and presentation skills especially through sprint
          reviews. I believe in effective communication and cooperation to
          deliver high-quality software solutions within deadlines. I thrive in
          challenging environments and enjoy tackling complex problems. Through
          my previous experiences, I have honed my ability to analyze issues,
          identify efficient solutions, and implement them effectively.
        </p>
        <br />
        <p className="text-xl ">
          Outside of work, I enjoy collecting and playing music, cooking ethnic meals as well as creative writing. 
          When I have the time, I like to work on side projects that will deepen my knowledge and experience.
        </p>{" "}
        <BackBtn/>
      </div>
    </div>
  );
};

export default About;
