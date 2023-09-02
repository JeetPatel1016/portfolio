"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 dark:text-gray-300/80">
        Being a full-stack developer based in Canada, I've experience building{" "}
        <span className="dark:text-white font-semibold">scalable</span> and{" "}
        <span className="dark:text-white font-semibold">fault-tolerant</span>{" "}
        web-based applications, ranging from{" "}
        <span className="italic font-medium dark:text-white">
          E-commerce applications
        </span>{" "}
        to{" "}
        <span className="italic font-medium dark:text-white">
          Learning Management Systems
        </span>
        . My favorite part of programming is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium text-black dark:text-white">
          React, Next.js, Node.js, and MongoDB
        </span>{" "}
        with{" "}
        <span className="font-medium text-black dark:text-white">
          TypeScript
        </span>
        .
      </p>

      <p>
        I'm passionate about trending and upcoming technologies in Web
        Development and creating efficient{" "}
        <span className="dark:text-white font-semibold">applications</span>{" "}
        coupled with beautiful UI. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
