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
        <span className="font-medium">Zakaria Ouidane</span>, a software
        engineer with a unique journey, embarked on a career path after
        graduating with a degree in{" "}
        <span className="font-medium">Physical Sciences</span>. Driven by a
        passion for programming, embarked on a journey in software engineering,
        where skills were honed and a love for building digital solutions was
        discovered. Now, as a{" "}
        <span className="font-medium">dedicated software developer</span>,{" "}
        <span className="italic">blends scientific background</span> with
        programming expertise to create innovative and impactful web
        applications.
      </p>
      <p>
        Proficient in{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . with familiarity with TypeScript. Eager to expand the skill set,
        actively seeking opportunities to learn new technologies. Currently on
        the lookout for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, aiming to contribute expertise and continue to grow
        professionally.
      </p>
      <p>
        With a{" "}
        <span className="font-medium">
          commitment to excellence and a passion for innovation
        </span>
        , poised to make a lasting impact in the field of software engineering.
      </p>
    </motion.section>
  );
}
