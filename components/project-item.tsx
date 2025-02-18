"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

type StackImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
};

export interface ProjectItemProps {
  index: number;
  title: string;
  description: string;
  image: string;
  href: string;
  imageAlt: string;
  direction: "ltr" | "rtl";
  isBuilding?: boolean;
  stacks: StackImageProps[];
}
const ProjectItem = ({
  title,
  description,
  image,
  href,
  imageAlt,
  direction,
  isBuilding,
  stacks,
}: ProjectItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link href={href}>
        {/* Div shown on small devices */}
        <div className="flex flex-col overflow-hidden rounded-xl bg-primary/15 p-0 text-center sm:hidden">
          <div className="h-36 w-full overflow-hidden rounded-t-xl bg-white object-contain">
            <Image
              className="w-full"
              src={image}
              width={400}
              height={100}
              alt={imageAlt}
            />
          </div>
          <div className="radial-gradient-top rounded-b-xl p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-300">{description}</p>
          </div>
        </div>

        <div
          className={cn(
            "hidden items-center justify-center p-6 sm:flex",
            direction === "rtl" && "flex-row-reverse",
          )}
        >
          <div
            className={cn(
              "sm:border-1 shadow-xs relative w-4/5 border-white/20 bg-gray-300/5 bg-opacity-60 px-8 py-6 shadow-inner shadow-zinc-800/10 backdrop-blur-md sm:relative sm:z-20 sm:rounded-xl",
              direction === "ltr" ? "left-3" : "right-4 pl-12",
            )}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              {isBuilding && (
                <div className="flex items-center gap-2 rounded-full border-2 border-blue-500/95 bg-blue-600/50 bg-opacity-50 px-2 py-1 text-xs">
                  <div className="size-2 animate-pulse rounded-full bg-blue-500/95" />
                  <span>Building</span>
                </div>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-300">{description}</p>
          </div>

          <div
            className={cn(
              "relative w-full overflow-hidden rounded-xl bg-primary/30 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/10 sm:h-40 sm:w-1/2",
              direction === "ltr" ? "right-4" : "left-4 bg-gradient-to-bl",
            )}
          >
            <div
              className={cn(
                "relative top-5 size-full overflow-hidden rounded-xl bg-white object-contain",
                direction === "ltr" ? "left-4" : "right-4",
              )}
            >
              <Image
                className="h-full"
                src={image}
                width={400}
                height={100}
                alt={imageAlt}
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative bottom-8 hidden gap-2 px-12 py-2 sm:flex",
            direction === "rtl" && "flex-row-reverse",
          )}
        >
          {stacks.map((itx, index) => (
            <img
              key={index}
              src={itx.src}
              className="rounded-full bg-purple-400/70 p-1"
              height={itx.height || 20}
              width={itx.width || 20}
              alt={itx.alt || "stack-image"}
            />
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
