import React from 'react';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {RiReactjsFill} from 'react-icons/ri';
import {SiElectron, SiJavascript, SiRedux, SiStyledcomponents, SiTailwindcss } from 'react-icons/si';



function Skills() {
    return (
        <div  className="max-w-2xl xl:max-w-4xl mx-auto justify-center py-12" id="skills">
           <div data-aos="fade-down" data-aos-duration="800">
           <p className="text-2xl text-white text-center sm:text-4xl pt-4 font-bold">
                Tech I Use
            </p>
           </div>
            <div className="flex flex-wrap justify-center pt-2">
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-black animate-bounce font-bold xl:font-mono mt-2 whitespace-nowrap text-[12px] xl:text-xl px-2 xl:px-0">React Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">React Native</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <img className="bg-white rounded-full " src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642335238/Avatar/next_js_logo_icon_145038_vn5fag.png" alt="" width={50} height={60}/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Next Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <SiJavascript className="text-yellow-300 w-10 h-10 xl:w-40 xl:h-40"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Javascript</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                <img className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642350403/Avatar/mascot_firebase-logo_ma5fxk.png" alt="" width={50} height={60}/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Firebase</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <FaNodeJs className="text-green-600 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Node Js</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <SiRedux className="text-purple-700 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Redux</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <img className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642336157/Avatar/Figma-logo_mtlo1v.svg" alt="" width={70} height={70}/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Figma</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <FaHtml5 className="text-orange-700 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Html</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <FaCss3Alt className="text-blue-900 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">CSS</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <SiTailwindcss className="text-teal-300 text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Tailwind css</span>

                </div>
                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <SiStyledcomponents className="text-pink-700 text-9xl"/>
                    <span className="text-black animate-bounce font-bold xl:font-mono mt-1 text-[12px] xl:text-xl">Styled Components</span>
                    
                </div>

                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                    <SiElectron className="text-[#097e95] text-9xl"/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Electron Js</span>
                    
                </div>

                <div data-aos="flip-right" className="flex flex-col w-20 h-20  xl:w-40 xl:h-40 p-1 xl:p-10 m-1 xl:m-6 overflow-hidden items-center bg-white backdrop-filter bg-opacity-60 backdrop-blur-lg rounded-lg">
                <img className="" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643125414/Avatar/logo_uvusp1.svg" alt="" width={60} height={60}/>
                    <span className="text-black whitespace-nowrap animate-bounce font-bold xl:font-mono mt-2 text-[12px] xl:text-xl">Recoil</span> 
                </div>
                
            </div>
        </div>
    )
}

export default Skills