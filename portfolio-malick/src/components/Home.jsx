import React from 'react'
import HeroImage from '../assets/Malick_ID_IMG.JPG'
import { BsArrowRightSquareFill } from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import SocialLinks from './SocialLinks';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div
      name="home"
      className="h-screen bg-gradient-to-b
    from-black via-black to-gray-800 "
    >
      {/* <BsArrowRightSquareFill/> */}
      {/* <img src={HeroImage} alt="nothing" /> */}

      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4' max-w-md>
            I have at least two years worth of professional experience building and
            designing web applications as a Full Stack developer at IBM. 
            I am a graduate of the University of Louisiana at
            Lafayette with a Bachelor of Science in Computer Science. I build 
            web applications using frameworks such as React, Angular,
            NodeJS, Springboot, MySQL. Check out my portfolio below!
          </p>

          <div>
            <Link className='group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500
            to-blue-500' to={"/portfolio"}>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <BsArrowRightShort  size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />`
        </div>
      </div>
    </div>
    <SocialLinks/>
    </>
  );
}

export default Home;