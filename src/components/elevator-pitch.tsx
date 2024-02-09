"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function ElevatorPitch() {
  const { ref } = useSectionInView("Elevator Pitch");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="elevator-pitch"
    >
      <SectionHeading>Elevator Pitch</SectionHeading>
      <p>
        Hello, I&apos;m Ouidane Zakaria. With a{" "}
        <span className="font-medium">
          background in software engineering and data analysis
        </span>
        , I bring expertise in{" "}
        <span className="font-medium">
          full stack development, problem-solving and team collaboration
        </span>
        . What sets me apart is my relentless pursuit of excellence and my{" "}
        <span className="font-medium">
          ability to deliver high-quality solutions under tight deadlines
        </span>
        , adapt to new technologies quickly and communicate effectively across
        teams. By leveraging these skills, I can streamline processes and drive
        innovation, ultimately making your job easier.{" "}
        <span className="font-medium">
          I&apos;m currently seeking exciting projects to contribute my
          expertise to
        </span>
        . If you&apos;re looking for someone who can elevate your team&apos;s
        performance, let&apos;s connect and explore how we can work together.
        Together, we can achieve great things.
      </p>
    </motion.section>
  );
}
