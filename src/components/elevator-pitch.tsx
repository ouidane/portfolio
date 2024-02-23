"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Video from "next-video";
import myVideo from "/videos/20240219_023853.mp4";

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
      <Video src={myVideo} />
    </motion.section>
  );
}
