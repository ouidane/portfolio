export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Bio",
    hash: "#bio",
  },
  {
    name: "Elevator Pitch",
    hash: "#elevator-pitch",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const projectsData = [
  {
    title: "Team slide deck",
    description:
      "The slide deck provides a comprehensive overview of our collaborative efforts in empowering resilience in coastal regions, showcasing our research findings and innovative solutions.",
    tags: ["Google Slides", "Miro"],
    imageUrl: "/team-slide-deck.jpg",
    projectUrl: "/empowering-resilience-in-coastal-regions.pdf",
  },
  {
    title: "Team video",
    description:
      "In the video, we take you on a journey through our empowering resilience project in coastal regions, highlighting the challenges faced by vulnerable communities and the innovative solutions developed by our team.",
    tags: ["Youtube", "Clipchamp"],
    imageUrl: "/team-video.jpg",
    projectUrl: "https://www.youtube.com/watch?v=4YXM9fAtcbs",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
