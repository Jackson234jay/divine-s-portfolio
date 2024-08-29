import React from "react";
import img from "../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div id="About" className="bg-fuchsia-400 overflow-x-hidden">
      <div className="lg:px-56 px-10  lg:py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img
          data-aos="fade-down"
          src={img}
          width={290}
          className=" border-2 p-2 rounded-full select-none  border-fuchsia-500 img_glow"
          alt=""
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] select-none font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
          >
            About Me
          </h1>
          <p
            data-aos="fade-left"
            className="cursor-pointer select-none leading-8"
          >
            Hi, I'm Divine Ezekiel, a versatile creative with a passion for
            storytelling through various mediums. With a strong skill set in
            video editing, proofreading, writing, and graphic design, I bring
            ideas to life with precision and creativity. My goal is to craft
            content that not only captivates but also communicates effectively,
            whether through compelling visuals or well-structured narratives.
            Let's connect and create something extraordinary together!
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <a
                className="select-none neno-button"
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-left"
                  className="neno-button duration-500 shadow-xl hover:shadow-fuchsia-800 text-white border-2 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
