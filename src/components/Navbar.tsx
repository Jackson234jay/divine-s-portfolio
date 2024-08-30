import { IoMenu } from "react-icons/io5";
import { showSidebar } from "../sidebar";
import { hideSidebar } from "../sidebar";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full bg-fuchsia-500 text-2xl  text-white font-sans font-bold px-2 lg:py-3 py-0 md:py-4">
      <nav>
        <ul className="rounded-lg my-3  text-[45px] space-y-4  fixed top-0 right-0 h-screen backdrop-blur-2xl w-3/6 z-[999] bg-rgba(255, 255, 255, 0.2) shadow-[-10px 0 10px] shadow-rgba(0, 0, 0, 0.1) hidden flex-col text-white items-start justify-start sidebar">
          <li
            onClick={hideSidebar}
            className="font-bold my-4 text-2xl text-black cursor-pointer"
          >
            <a href="#">
              <IoCloseCircleOutline className="inline-block my-5 h-5/6" />
            </a>
          </li>
          <Link spy={true} smooth={true} to="Home">
            <li className="my-3">
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-3">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-3">
              <a href="">Contact</a>
            </li>
          </Link>
        </ul>
        <ul className="flex flex-row justify-end items-center py-4 text-white font-bold font-sans">
          <li>
            <a href="" className="hover:text-white">
              Logo
            </a>
          </li>
          <Link spy={true} smooth={true} to="Home">
            <li className="hideOnMobile">
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="hideOnMobile">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="hideOnMobile">
              <a href="">Contact</a>
            </li>
          </Link>
          <li
            className="menu-btn transition-all duration-500 text-3xl items-center justify-center flex"
            onClick={showSidebar}
          >
            <a href="#">
              <IoMenu className="h-[26]  duration-500 w-[26] items-center" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
