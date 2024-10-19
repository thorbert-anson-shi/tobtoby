import type { Component } from "solid-js";
import { lazy, onMount } from "solid-js";

// First section to load
import HeroSection from "./sections/HeroSection";

// Lazy load the other sections to improve responsiveness
const ValuesSection = lazy(() => import("./sections/ValuesSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const PlatformsSection = lazy(() => import("./sections/PlatformsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));

const App: Component = () => {
  return (
    <>
      <div class="flex h-screen w-screen flex-col items-center *:shrink-0">
        <HeroSection />
        {/* <ValuesSection /> */}
        <section class="flex h-full w-full flex-col justify-center md:flex-row md:space-x-10">
          <SkillsSection />
          <PlatformsSection />
        </section>
        <ProjectsSection />
        {/* <Blog /> */}
        {/* <ExportSection /> */}
      </div>
    </>
  );
};

export default App;
