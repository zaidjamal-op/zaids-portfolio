import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

function About() {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className=" text-2xl text-white md:text-4xl font-bold text-center">
                {"Hey !"}
            </p>
            <p className="text-base xl:text-xl text-center text-white/70 leading-relaxed mt-4">
                I'm a passionate <b className="text-white">Frontend Developer</b> (for React and React Native). I love to convert UI design into the real using React. I also love freelancing and working on open source projects.
            </p>
            <ScrollIntoView selector="#skills">
                <div className="mx-auto p-20 hover: cursor-pointer">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-white"/>
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About