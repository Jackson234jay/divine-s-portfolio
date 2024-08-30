import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div
      id="Contact"
      className="p-20 bg-fuchsia-400 flex overflow-x-hidden items-center flex-col bg-fixed justify-center"
    >
      <div>
        <h1
          data-aos="slide-left"
          className="text-[52px] outline-white font-serif text-center select-none cursor-pointer  font-semibold mb-2 leading-normal uppercase text-fuchsia-700"
        >
          Contact Me
        </h1>
        <h1
          data-aos="slide-right"
          className="px-4 text-white select-none text-[20px] text-center cursor-pointer"
        >
          I'd love to connect and hear from you! Whether you have a question, a
          project in mind, or just want to chat, feel free to reach out. Email:
          <span
            title="Can copy the link"
            className="cursor-text select-text underline"
          >
            divineotah2007@gmail.com
          </span>{" "}
          Phone Number:
          <span
            title="Can copy the link"
            className="cursor-text select-text underline"
          >
            09136703360
          </span>{" "}
          Looking forward to hearing from you!
        </h1>
      </div>
    </div>
  );
};

export default Contact;
