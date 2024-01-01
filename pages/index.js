import Head from "next/head";
import {
  useEffect,
  useState,
} from "react";
import About from "../components/About";
import Card from "../components/Card";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsFillSunFill,
  BsFillMoonFill,
} from "react-icons/bs";
import Projects from "../components/Projects";
import data from "../data/data.json";

export default function Home() {
  const [dark, setDark] =
    useState(false);
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  return (
    <div
      className={`${
        dark
          ? "bg-slate-900"
          : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 "
      } py-10 px-5 min-h-screen`}
    >
      <Head>
        <title>
          {"Zaid's Portfolio"}
        </title>
        <meta
          name="description"
          content="Let's collaborate to bring your web vision to reality!"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dqmlanbbj/image/upload/v1681779308/ZAID_CRYPTO_PUNK_Latest_New_kkbfgf.png"
        />
      </Head>

      {dark === true ? (
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-yellow-100 text-3xl cursor-pointer -mt-4 mb-3 xl:mb-0"
          onClick={() => setDark(false)}
        >
          <BsFillSunFill className="text-yellow-500 " />
        </div>
      ) : (
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black text-3xl cursor-pointer -mt-4 mb-3 xl:mb-0"
          onClick={() => setDark(true)}
        >
          <BsFillMoonFill className="text-white" />
        </div>
      )}

      <div
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <Card />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <About />
      </div>
      <Skills />
      <div className="max-w-5xl mx-auto">
        <div
          data-aos="zoom-in"
          data-aos-duration="400"
          data-aos-delay="200"
        >
          {data.map((d, i) => (
            <div key={i}>
              <Projects
                title={d.title}
                link={d.deployedlink}
                githublink={
                  d.githublink
                }
                carousel={d.carousel}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
