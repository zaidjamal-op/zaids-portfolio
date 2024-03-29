import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import ProfilePic from '../assets/ZAID CRYPTO PUNK Latest New.png';
import {Tilt} from "react-tilt";

function Card() {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 35 }}
    >
      <div className="w-full Tilt-inner">
        <div className="flex flex-col justify-center  max-w-sm mx-auto rounded-lg bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg">
          <div className="flex justify-center my-2">
            <img
              className="rounded-full"
              src={ProfilePic}
              alt=""
              width={140}
              height={140}
            />
          </div>
          <div className="text-center my-2 text-black text-2xl font-sans">
            <Typewriter
              options={{
                strings: [
                  "ZAID JAMAL ",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="text-center my-2 text-black text-base font-sans">
            <h4>
              Fullstack Developer 
            </h4>
          </div>
          <div className="flex justify-center space-x-5 my-2 ">
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-gray-400">
              <a
                className="text-3xl  hover: cursor-pointer"
                href="https://github.com/zaidjamal-op"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-blue-200">
              <a
                className="text-3xl text-blue-800 hover: cursor-pointer"
                href="https://www.linkedin.com/in/zaid-jamal-1856b1203/"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-red-200">
              <a
                className="text-3xl text-red-800 hover: cursor-pointer"
                href="mailto: zaidjamalop@gmail.com"
              >
                <SiGmail />
              </a>
            </div>

            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-green-300">
              <a
                className="text-3xl text-green-900 hover: cursor-pointer"
                href="tel:+919549093030"
              >
                <AiFillPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
