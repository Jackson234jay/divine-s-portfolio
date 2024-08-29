import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGmail } from "react-icons/si";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="Home"
      className=" h-screen bg-fuchsia-400 min-h-screen min-w-full overflow-x-hidden bg-fixed bg-cover lg:px-56 px-10 lg:py-20 py-10 text-center gap-5 lg:text-start flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white w-full">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-white  lg:text-[52px] select-none cursor-pointer uppercase flex flex-col justify-center lg:items-start items-center  leading-normal mb-5 md:text-[128px] font-serif text-[52px] font-bold"
        >
          Welcome To My <span className="text-fuchsia-700">Portfolio</span>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-white text-xl font-serif select-none cursor-pointer"
        >
          I hope you find my portfolio website engaging and informative.
        </p>
        <div className="flex flex-row mt-3">
          <div className="flex items-center space-x-2 justify-center">
            <a
              href="mailto:divineotah2007@gmail.com"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <SiGmail data-aos="slide-up" className="text-[28px]" />
            </a>
            <a
              href="tel:09136703360"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <FaPhoneAlt data-aos="slide-down" className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
