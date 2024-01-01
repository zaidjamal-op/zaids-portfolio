import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

function About() {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className=" text-2xl text-white md:text-4xl font-bold text-center">
                {"Hey !"}
            </p>
            <p className="text-base xl:text-xl text-center text-white/70 leading-relaxed mt-4">
                Transforming visions into immersive digital experiences with expertise in React, React Native, and full-stack development. Passionate about bridging design with functionality, I thrive on crafting seamless user interfaces while contributing to open source and embracing freelance opportunities.
            </p>
            <ScrollIntoView selector="#skills">
                <div className="mx-auto p-16 hover: cursor-pointer">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-white"/>
                </div>
            </ScrollIntoView>
        </div>
    );
}

export default About
