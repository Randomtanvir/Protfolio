"use client";

import { motion } from "framer-motion";
import {
  AboutIcon,
  HomeIcon,
  MessageIcon,
  ProjectIcon,
  ServiceIcon,
} from "@/svg/Icon";
import React from "react";
import A from "./A";
import MobileNav from "./MobileNav";
import ThemeToggle from "../theme/ThemeToggle";
import { LockKeyhole } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Right Menu Section - Adjusted for Mobile */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Starts invisible and slightly shifted to the right
        animate={{ opacity: 1, x: 0 }} // Fades in and moves into position
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        className="dark:bg-white/10 backdrop-blur-[5px] dark:backdrop-blur-[8px] bg-black/30 border border-white/20 shadow-xl fixed right-4 top-1/2 transform -translate-y-1/2 md:flex flex-col gap-4 p-3 rounded-xl hidden z-50 "
      >
        <A href="/" title="Home">
          <HomeIcon className="size-6" />
        </A>
        <A href="/services" title="Services">
          <ServiceIcon className="size-6" />
        </A>
        <A href="/projects" title="Projects">
          <ProjectIcon className="size-6" />
        </A>
        <A href="/about" title="About">
          <AboutIcon className="size-6" />
        </A>
        <A href="/contact" title="Contact">
          <MessageIcon className="size-6" />
        </A>
        <A href="/admin-login" title="Login-Admin">
          <LockKeyhole className="size-6" />
        </A>
        <ThemeToggle />
      </motion.div>

      {/* Bottom Menu for Mobile */}
      <MobileNav />
    </>
  );
};

export default Navbar;
