import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Projects({img1, img2, img3, des1, des2, des3 ,title}) {
  return <div className="ml-6 xl:ml-32 pt-20 xl:pt-40">
      <div className="text-white font-bold mb-2 text-3xl xl:text-5xl xl:pb-3">
          <h1>{title}</h1>
      </div>
       <Carousel 
       stopOnHover
       width="95%"
       useKeyboardArrows
  autoPlay
  infiniteLoop
  showStatus={false}
  showIndicators={false}
  showThumbs
  interval={5000}>
  <div>
      <img src={img1} alt=""/>
      <p className="legend">{des1}</p>
  </div>
  <div>
      <img src={img2} alt=""/>
      <p className="legend">{des2}</p>
  </div>
  <div>
      <img src={img3} alt="" />
      <p className="legend">{des3}</p>
  </div>
</Carousel>
  </div>
}

export default Projects;
