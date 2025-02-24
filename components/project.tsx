import { ProjectItemProps } from "./project-item";

import ProjectItem from "./project-item";

const projects: ProjectItemProps[] = [
  {
    index: 0,
    title: "Zenmarks",
    description:
      "Manage the chaos of your online life with my bookmark link management tool",
    image: "/Zenmarks-mockup.jpg",
    href: "https://zenmarks-five.vercel.app/",
    imageAlt: "Zenmarks-mockup",
    isBuilding: true,
    direction: "ltr",
    stacks: [
      { src: "/stack/next.svg", alt: "next-image" },
      { src: "/stack/tailwind.svg", alt: "tailwind-image" },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYoesVkiL5oNshOSby_rzSjDCJLunRIhrbzOYXtGVa3NmlJuZ3w_6iw_Z&s=10",
        alt: "shadcn",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfyeg7pTXz_qzomvLR0qMCdrqL80LjMYfSq7zA9SQQla3RhTx3uWoEc8&s=10",
        alt: "Shadcn",
      },
    ],
  },

  {
    index: 1,
    title: "Projex",
    description: "A project management kanban board to make your life easier",
    image: "/projex.jpg",
    href: "https://projex-ruby.vercel.app/",
    imageAlt: "projex-mockup",
    direction: "rtl",
    stacks: [
      { src: "/stack/next.svg", alt: "next-image" },
      { src: "/stack/prisma.svg", alt: "prisma-image" },
      { src: "/stack/tailwind.svg", alt: "tailwind-image" },
    ],
  },
  {
    index: 2,
    title: "Habit streaks",
    href: "https://habitstreaks.vercel.app/",
    description:
      "Never miss 2 habits in a row with a github style habit tracker",
    image: "/habit-streaks.jpg",
    imageAlt: "habit-streaks-mockup",
    direction: "ltr",
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
    <h2 className="text-center text-2xl font-extrabold text-white">Projects</h2>
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
