"use client";
import dynamic from "next/dynamic";
import { ProjectItemProps } from "./project-item";

const ProjectItem = dynamic(() => import("@/components/project-item"), {
  ssr: false,
});
const projects: ProjectItemProps[] = [
  {
    index: 0,
    title: "Projex",
    description: "A project management kanban board to make your life easier",
    image: "/projex.jpg",
    href: "https://projex-ruby.vercel.app/",
    imageAlt: "projex-mockup",
    direction: "ltr",
    stacks: [
      { src: "/stack/next.svg", alt: "next-image" },
      { src: "/stack/prisma.svg", alt: "prisma-image" },
      { src: "/stack/tailwind.svg", alt: "tailwind-image" },
    ],
  },
  {
    index: 1,
    title: "Habit streaks",
    href: "https://habitstreaks.vercel.app/",
    description:
      "Never miss 2 habits in a row with a github style habit tracker",
    image: "/habit-streaks.jpg",
    imageAlt: "habit-streaks-mockup",
    direction: "rtl",
    stacks: [
      { src: "/stack/next.svg", alt: "next-image" },
      { src: "/stack/prisma.svg", alt: "prisma-image" },
      { src: "/stack/tailwind.svg", alt: "tailwind-image" },
    ],
  },
  //   {
  //     index: 2,
  //     title: "YT Summarizer",
  //     description: "Summarize YouTube videos with ease",
  //     image: "/yt-summarizer.jpg",
  //     imageAlt: "yt-summarizer-mockup",
  //     direction: "ltr",
  //     isBuilding: true,
  //   },
];

export const Projects = () => (
  <div className="space-y-4 px-4 py-24 sm:px-0">
    <h2 className="text-center text-2xl font-extrabold text-primary">
      Projects
    </h2>
    <div className="space-y-8">
      {projects.map((project) => (
        <ProjectItem
          key={project.index}
          index={project.index}
          title={project.title}
          href={project.href}
          description={project.description}
          image={project.image}
          imageAlt={project.imageAlt}
          direction={project.direction}
          isBuilding={project.isBuilding}
          stacks={project.stacks}
        />
      ))}
    </div>
  </div>
);
