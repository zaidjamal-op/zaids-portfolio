import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { FaGithub } from "react-icons/fa";


function ProjectOne({img1, img2, img3, des1, des2, des3 ,title, link}) {
  return <div className="ml-6 xl:ml-32 pt-20 xl:pt-40">
      <div className="flex flex-row items-center space-x-2 text-white font-bold mb-2 text-3xl xl:text-5xl xl:pb-3">
          <h1>{title}</h1>
          <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 hover:bg-gray-400">
                   <a className="text-2xl   hover: cursor-pointer" href="https://github.com/zaidjamal-op/whatsapp-next">
                        <FaGithub  className="text-black"/>
                    </a>
                    
                   </div>
      </div>
      <div className="text-white mb-2 xl:pb-3">
          <a className="underline" href={`${link}`}>{link}</a>
      </div>
       <Carousel 
       
       width="95%"
       useKeyboardArrows
  autoPlay
  infiniteLoop
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={3000}>
  <div>
      <Image src={img1} alt="" width={1500} height={800} />
      <p className="legend">{des1}</p>
  </div>
  <div>
      <Image src={img2} alt="" width={1500} height={800} />
      <p className="legend">{des2}</p>
  </div>
  <div>
      <Image src={img3} alt="" width={1500} height={800} />
      <p className="legend">{des3}</p>
  </div>
</Carousel>
  </div>
}

export default ProjectOne;
