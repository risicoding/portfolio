import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "/stack/next.svg" },
  { name: "React", icon: "/stack/react.svg" },
  { name: "Tailwind", icon: "/stack/tailwind.svg" },
  {
    name: "Shadcn",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsjwqGxLB31Ng-OGC8RLW401WIDgubhIqNg&s",
  },
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "Prisma", icon: "/stack/prisma.svg" },
  {
    name: "Drizzle",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3aJ56roXgnnlCyXnVTq4_bDGkRn7dlyW2g&s",
  },
  {
    name: "PostgreSql",
    icon: "/stack/postgres.svg",
  },
  { name: "Vercel", icon: "/stack/vercel.svg" },
];

export default function TechStack() {
  return (
    <div className="px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-extrabold">
          <span className="text-primary">Tech Stack</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="radial-gradient-stack mb-4 flex size-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary/5 bg-primary p-[13px] transition-transform hover:scale-110 hover:bg-purple-900">
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
