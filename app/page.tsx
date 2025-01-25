import { Hero } from "@/components/hero";
import TechStack from "@/components/tech-stack";
import ProjectItem from "@/components/project-item";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <TechStack />

      <div className="px-4 py-20 space-y-8 sm:px-0">


      <ProjectItem title="Heloo world" description="a bunch of bullshit code written by a jr dev to pass time which doesnt do anything well . let me know if you wanna buy it for 150$" image="nothing" direction="ltr" />
      <ProjectItem title="Heloo world" description="a bunch of bullshit code written by a jr dev to pass time which doesnt do anything well . let me know if you wanna buy it for 150$" image="nothing" direction="rtl" />
      <ProjectItem title="Heloo world" description="a bunch of bullshit code written by a jr dev to pass time which doesnt do anything well . let me know if you wanna buy it for 150$" image="nothing" direction="ltr" />
      </div>
    </div>
  );
};

export default Page;
