import {
  AboutIcon,
  HomeIcon,
  MessageIcon,
  MoonIcon,
  ProjectIcon,
  ServiceIcon,
} from "@/svg/Icon";
import React from "react";
import A from "./A";

const MobileNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/10 backdrop-blur-[5px] border border-white/20 z-50 p-3 px-5 rounded-xl md:hidden">
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
      <A title="Message" href="#">
        <MoonIcon className="size-6" />
      </A>
    </div>
  );
};

export default MobileNav;
