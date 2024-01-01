import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function ContactMe() {
    return (
        <div className="max-w-[250px] xl:max-w-2xl text-center m-auto pt-36 pb-10">
            <div data-aos="fade-right" data-aos-duration="500">
            <h1 className="text-lg xl:text-4xl text-white"><b>Interested in working together ?</b></h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="500">
            <a className="pt-4" href="mailto: iamzaidbinarshad@gmail.com">
                <div className="flex flex-row items-center justify-center w-30 h-10 rounded-lg mt-4 bg-white backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-400">
                    <span className="animate-bounce mr-3 text-white font-semibold text-center">
                        Get in touch
                    </span>
                    <b className="text-white animate-bounce"><FaArrowRight/></b>
                </div>
            </a>
            </div>
        </div>
    )
}

export default ContactMe