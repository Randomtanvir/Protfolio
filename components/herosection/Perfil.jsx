import { Dancing_Script } from "next/font/google";
// import { Playwrite_IT_Moderna } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Tanvir_img from "@/public/img/home-perfil.png";

const DancingFont = Dancing_Script({
  variable: "--font-DancingFont", // Unique variable name
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Perfil = () => {
  return (
    <div className=" dark:ring-white/35 ring-indigo-500 ring relative md:h-full h-[415px] rounded-2xl p-4 grid overflow-hidden lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-8 animate-fade-down">
      <Image
        className="w-[250px] lg:w-[480px] absolute self-end justify-self-center"
        alt="Tanvir_Ahmad"
        src={Tanvir_img}
      />
      <div className="self-end bg-black/10 backdrop-blur-lg px-8 py-6 rounded-3xl border border-white/70">
        <h1
          className={`${DancingFont.className} text-2xl dark:text-white font-bold text-black mb-4`}
        >
          Tanvir Ahmad
        </h1>
        <p className="text-sm text-zinc-50 mb-5 max-w-[280px]">
          Visit the projects section to see the work done with these web
          technologies.
        </p>
        <div className="grid gap-x-2 grid-cols-2 ">
          <Button variant="destructive">Project</Button>
          <Button variant="secondary">Services</Button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
