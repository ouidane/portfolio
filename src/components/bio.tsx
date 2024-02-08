"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Bio");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="bio"
    >
      <SectionHeading>Bio</SectionHeading>
      <p className="mb-3">
        I&apos;m a software engineer with a unique journey. After graduating
        with a degree in Physical Sciences, I decided to follow my passion for
        programming. I took the leap and enrolled in ALx software engineering,
        where I honed my skills and discovered my love for building digital
        solutions. Now, as a dedicated software developer, I combine my
        scientific background with my programming expertise to create innovative
        and impactful web applications.
        <br />
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
