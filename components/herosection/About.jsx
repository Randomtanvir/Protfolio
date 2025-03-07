import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FacebookIcon, GithubIcon, LinkdinIcon } from "@/svg/Icon";

const About = () => {
  return (
    <div className="bg-gray-200 dark:bg-[#1a1941ad] ring ring-white/30 px-8 py-6 rounded-4xl lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:content-center animate-fade-right ">
      <h3 className="text-sm mb-4">
        Tanvir Ahmad - <b>Web Designer & Developer</b>
      </h3>
      <p className="about_description">
        Located in Peru, I have several years of experience in web development
        and design, carrying out several successful projects.
      </p>
      <div className="flex justify-center gap-x-6 my-8">
        <Link
          className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
          href="#"
        >
          <LinkdinIcon />
        </Link>
        <Link
          className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
          href="#"
        >
          <GithubIcon />
        </Link>
        <Link
          className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
          href="#"
        >
          <FacebookIcon />
        </Link>
      </div>
      <div className="relative h-[180px] rounded-4xl overflow-hidden dark:bg-gradient-to-tr dark:from-[#01024159] dark:to-[#056b1fa6] opacity-90 ">
        <img
          alt="logo"
          src="/img/about-perfil.png"
          className="w-[250px] justify-self-center z-10 -translate-y-10  "
        />
      </div>
      <p className="text-xs mt-4 mb-8 ">
        He doesn&apos;t write messages on social networks, send me an email and
        I&apos;ll answer you.
      </p>
      <Button className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-b dark:from-[#38409b] from-white/40 to-black/60  dark:to-[#1c1e47] rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl active:shadow-md active:translate-y-[2px]">
        Contact Me
      </Button>
    </div>
  );
};

export default About;
