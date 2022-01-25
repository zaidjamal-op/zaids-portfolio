import Head from 'next/head'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Card from '../components/Card'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {BsFillSunFill, BsFillMoonFill} from  'react-icons/bs'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'
import ProjectThree from '../components/ProjectThree'
//https://res.cloudinary.com/dqmlanbbj/image/upload/v1642866004/Avatar/linkedin-main_lrryra.png
//https://res.cloudinary.com/dqmlanbbj/image/upload/v1642866002/Avatar/linkedin-login-page_cbkicn.png
//https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-login-google_fe3nqg.png
//https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-main_wknblm.png
//https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-login_inhuiv.png
export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    AOS.init({
      once: false,
    })
  })
  return (
    <div className={`${dark ? "bg-slate-900" : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 "} py-10 px-5 min-h-screen`}>
      <Head>
        <title>{"Zaid's Portfolio"}</title>
        <meta name="description" content="Generated by create next app" />
        <link  rel="icon" href="https://res.cloudinary.com/dqmlanbbj/image/upload/v1640190776/Avatar/ZAIDOP_wtii2t.jpg" />
      </Head>

      <div className="flex justify-end items-center -mr-5 xl:mr-5 p-2 cursor-pointer top-0 sticky " >
          {dark === true ? (
            <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-yellow-100" onClick={() => setDark(false)}>
              <BsFillSunFill className="text-yellow-500"/>
            </div>
          ) : (
            <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black" onClick={() => setDark(true)}>
              <BsFillMoonFill className="text-white"/>
            </div>
          )}
        </div>
      
      <div data-aos="fade-down" data-aos-duration="800">
      <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <About/>
      </div>
      <Skills/>
      <div className="max-w-5xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
        <ProjectOne  title={"Whatsapp-Clone(Next.Js)"} link="https://whatsapp-next-five.vercel.app/" des1={"Whatsapp-Login-Page"} des2={"Whatsapp-Google-Login"} des3={"Whatsapp-1-to-1-Chat-Page"} img1="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-login_inhuiv.png" img2="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-login-google_fe3nqg.png" img3="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642853455/Avatar/whatsapp-main_wknblm.png"/>
        </div>
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
        <ProjectTwo title={"LinkedIn-Clone(React.Js)"} link="https://linkedin-clone-6a2f0.web.app/" des1={"LinkedIn-Login-Page"} des2={"LinkedIn-Main-Page"} img1="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642866002/Avatar/linkedin-login-page_cbkicn.png" img2="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642866004/Avatar/linkedin-main_lrryra.png"/>
        </div>
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
        <ProjectThree title={"Twitter-Clone(Next.js)"} link="https://twitter-clone-recoil.vercel.app/" des1={"Twitter-Login-Page"} des2={"Twitter-Home-Page"} des3={"Twitter-Comment-Modal"} des4={"Twitter-Comment-Page"} des5={"Twitter-Like-Page"} img1="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643123448/Avatar/Twitter-Login-Page_wnksmj.png" img2="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643123452/Avatar/Twitter-Home-Page_ypdf1b.png" img3="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643123451/Avatar/Twitter-Comment-Modal_xh1qaf.png" img4="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643123453/Avatar/Twitter-Comment-Page_r1glbt.png" img5="https://res.cloudinary.com/dqmlanbbj/image/upload/v1643123451/Avatar/Twitter-Like-Page_vnzkf5.png"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
