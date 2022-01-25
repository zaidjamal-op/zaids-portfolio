import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import {FaDownload, FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function Footer() {
    return (
        <div >
            <footer className="py-5 bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
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
                  <a className="text-3xl text-red-800 hover: cursor-pointer" href="mailto:me.iamzaidbinarshad@gmail.com">
                        <SiGmail/>
                    </a>
                  </div>
                  <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-lime-200">
                  <a className="text-2xl text-lime-800 hover: cursor-pointer" href="https://drive.google.com/file/d/1O2VwSqK05i_XgC-a5q7nv2y0L-ZD3msN/view?usp=sharing">
                        <FaDownload className="animate-bounce"/>
                    </a>
                  </div>
                  <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-green-300">
                  <a className="text-3xl text-green-900 hover: cursor-pointer" href="tel:+919549093030">
                        <AiFillPhone/>
                    </a>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                    <span className="text-white">Made with 💙 <b>Zaid Jamal</b></span>
                </div>
        </footer>
        </div>
    )
}

export default Footer