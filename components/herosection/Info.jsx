import React from "react";
import { Button } from "../ui/button";
import Image3 from "@/public/img/test.png";
import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-gray-200 dark:bg-[#1a1941ad] ring ring-white/30 px-8 py-6 rounded-4xl lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 animate-fade-left ">
      <div className="flex justify-center items-center gap-x-2 animate-fade-right">
        <div className="w-8 h-8 relative rounded-full bg-[#4a2fc3] flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#ffffff7c] animate-bounce transition duration-[2s]"></div>
        </div>
        <h1 className="text-base">Tanvir Ahmad</h1>
      </div>
      <div className="h-[180px] relative bg-transparent rounded-4xl grid my-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full dark:bg-indigo-400 bg-teal-500 opacity-20 blur-6xl"></div>
        <Image
          className="w-[200px] self-end z-10 justify-self-start "
          alt="tanvr"
          src={Image3}
        />
      </div>
      <p className="text-sm mb-8">
        Passionate about creating and designing websites with the best engaging
        interfaces.
      </p>
      <Button className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-b dark:from-[#38409b] from-white/40 to-black/60  dark:to-[#1c1e47] rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl active:shadow-md active:translate-y-[2px]">
        Download CV
      </Button>
    </div>
  );
};

export default Info;
