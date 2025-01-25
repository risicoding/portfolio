import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "/stack/next.svg" },
  { name: "React", icon: "/stack/react.svg" },
  { name: "Tailwind", icon: "/stack/tailwind.svg" },
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "Prisma", icon: "/stack/prisma.svg" },
];

export default function TechStack() {
  return (
    <div className="px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-extrabold">
          <span className="text-primary">Tech Stack</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center"
            >
              <div className="radial-gradient-stack border-2 border-primary/5 bg-primary  overflow-hidden mb-4 flex size-12 items-center justify-center rounded-full p-[13px] transition-transform hover:scale-110 hover:bg-purple-900">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
