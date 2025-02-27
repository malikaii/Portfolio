import React from "react";
import spaceInvaders from "../assets/portfolio/SpaceInvaders.png";
import secondHarvest from "../assets/portfolio/SecondHarvest.png";
import chatbotscreenshot from "../assets/portfolio/chatbotss.png";
import BackBtn from "./BackBtn";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spaceInvaders,
      info: "Space Invaders game made with Python",
    },
    {
      id: 2,
      src: chatbotscreenshot,
      info: "GoogleAI Chatbot made with React",
    },
    {
      id: 3,
      src: secondHarvest,
      info: "Non-profit Capstone Project made with React, Springboot, MySQL",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, info }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex ">
                <p className=" px-6 py-3 duration-200 hover:scale-105 mt-auto">
                  {info}
                </p>
              </div>
            </div>
          ))}

          <BackBtn />
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
