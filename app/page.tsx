import { Hero } from "@/components/hero";
import TechStack from "@/components/tech-stack";
import React from "react";
import { Projects } from "@/components/project";
import { Footer } from "@/components/footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Page;
