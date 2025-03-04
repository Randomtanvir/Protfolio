import {
  AboutIcon,
  HomeIcon,
  MessageIcon,
  MoonIcon,
  ProjectIcon,
  ServiceIcon,
} from "@/svg/Icon";
import Link from "next/link";
import React from "react";
import A from "./A";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      {/* Right Menu Section - Adjusted for Mobile */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-3 rounded-xl">
        <A href="#" title="Home">
          <HomeIcon className="size-6" />
        </A>
        <A href="#" title="Services">
          <ServiceIcon className="size-6" />
        </A>
        <A href="#" title="Project">
          <ProjectIcon className="size-6" />
        </A>
        <A href="#" title="About">
          <AboutIcon className="size-6" />
        </A>
        <A title="Message" href="#">
          <MessageIcon className="size-6" />
        </A>
        <A title="Night" href="#">
          <MoonIcon className="size-6" />
        </A>
      </div>

      {/* Bottom Menu for Mobile */}
      <MobileNav />
    </>
  );
};

export default Navbar;
