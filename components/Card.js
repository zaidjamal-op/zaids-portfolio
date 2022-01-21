import React from 'react';
import Typewriter from 'typewriter-effect';
import {FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
function Card() {
    return (
        <div className="w-full">

            <div className = "flex flex-col justify-center  max-w-sm mx-auto rounded-lg bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400">
                <div>
                    <img className = "w-40 mx-auto rounded-full shadow-xl drop-shadow-sm my-2"src = "https://i.pinimg.com/564x/de/52/b7/de52b7bd3fbd77d5ca765bb6c40b3eb0.jpg" alt=""/>
                </div>
                <div className="text-center my-2 text-white text-2xl font-sans">
                <Typewriter
  options={{
    strings: ['ZAID JAMAL '],
    autoStart: true,
    loop: true,
  }}
/>
                </div>

                <div className="text-center my-2 text-white text-base font-sans">
                    <h4>React Frontend Developer/ UI Designer</h4>
                </div>
                <div className="flex justify-center space-x-5 my-2 ">
                   <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-gray-400">
                   <a className="text-3xl  hover: cursor-pointer" href="https://github.com/zaidjamal-op">
                        <FaGithub />
                    </a>
                    
                   </div>
                   <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-blue-200">
                   <a className="text-3xl text-blue-800 hover: cursor-pointer" href="https://www.linkedin.com/in/zaid-jamal-1856b1203/">
                        <FaLinkedinIn/>
                    </a>
                    
                   </div>
                  <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-red-200">
                  <a className="text-3xl text-red-800 hover: cursor-pointer" href="mailto: iamzaidbinarshad@gmail.com">
                        <SiGmail/>
                    </a>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card