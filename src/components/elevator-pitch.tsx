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
        I&apos;m a driven software engineer on a mission to blend creativity and
        technical expertise. With a background in Physical Sciences and a
        passion for programming, I thrive on solving complex problems and
        crafting innovative solutions. From honing my skills at Alx software
        engineering to becoming a dedicated full-stack developer, I bring a
        unique perspective to every project.
      </p>
    </motion.section>
  );
}
