import Image from 'next/image';
import React from 'react';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {RiReactjsFill} from 'react-icons/ri';
import {SiElectron, SiJavascript, SiRedux, SiStyledcomponents, SiTailwindcss } from 'react-icons/si';



function Skills() {
    return (
        <div  className="max-w-4xl mx-auto justify-center py-12" id="skills">
           <div data-aos="fade-down" data-aos-duration="800">
           <p className="text-2xl text-white text-center sm:text-4xl pt-4 font-bold">
                Tech I Use
            </p>
           </div>
            <div className="flex flex-wrap justify-center pt-2">
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-white animate-bounce font-bold font-mono mt-2">React Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">React Native</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <Image className="bg-white rounded-full" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642335238/Avatar/next_js_logo_icon_145038_vn5fag.png" alt="" width={50} height={60}/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Next Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <SiJavascript className="text-yellow-300 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Javascript</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                <Image className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642350403/Avatar/mascot_firebase-logo_ma5fxk.png" alt="" width={50} height={60}/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Firebase</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <FaNodeJs className="text-green-600 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Node Js</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <SiRedux className="text-purple-700 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Redux</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <Image className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642336157/Avatar/Figma-logo_mtlo1v.svg" alt="" width={70} height={70}/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Figma</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <FaHtml5 className="text-orange-700 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Html</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <FaCss3Alt className="text-blue-900 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">CSS</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <SiTailwindcss className="text-teal-300 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Tailwind css</span>

                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <SiStyledcomponents className="text-pink-700 text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Styled Components</span>
                    
                </div>

                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                    <SiElectron className="text-[#097e95] text-9xl"/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Electron Js</span>
                    
                </div>

                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400 rounded-lg">
                <Image className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643125414/Avatar/logo_uvusp1.svg" alt="" width={60} height={60}/>
                    <span className="text-white whitespace-nowrap animate-bounce font-bold font-mono mt-2">Recoil</span> 
                </div>
                
            </div>
        </div>
    )
}

export default Skills