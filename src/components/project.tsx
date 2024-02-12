"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./project-card";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project(props: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {props.projectUrl.startsWith("/") ? (
        <Link
          href={props.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <ProjectCard {...props} />
        </Link>
      ) : (
        <a href={props.projectUrl} target="_blank">
          <ProjectCard {...props} />
        </a>
      )}
    </motion.div>
  );
}
