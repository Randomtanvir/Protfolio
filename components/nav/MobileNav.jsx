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
import ThemeToggle from "../theme/ThemeToggle";
import { LockKeyhole } from "lucide-react";

const MobileNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 dark:bg-white/10 bg-black/40 backdrop-blur-[5px] border border-white/20 z-50 p-3 rounded-xl md:hidden overflow-hidden"
    >
      <A href="/" title="Home">
        <HomeIcon className="size-6" />
      </A>
      <A href="/services" title="Services">
        <ServiceIcon className="size-6" />
      </A>
      <A href="/projects" title="Project">
        <ProjectIcon className="size-6" />
      </A>
      <A href="/about" title="About">
        <AboutIcon className="size-6" />
      </A>
      <A title="Contact" href="/contact">
        <MessageIcon className="size-6" />
      </A>
      <A title="Admin-Login" href="/admin-login">
        <LockKeyhole className="size-6" />
      </A>
      <ThemeToggle />
    </motion.div>
  );
};

export default MobileNav;
