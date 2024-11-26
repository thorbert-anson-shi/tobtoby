import type { Component } from "solid-js";
import { lazy, onMount } from "solid-js";

// First section to load
import HeroSection from "./sections/HeroSection";

// Lazy load the other sections to improve responsiveness
const ValuesSection = lazy(() => import("./sections/ValuesSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const PlatformsSection = lazy(() => import("./sections/PlatformsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ExperiencesSection = lazy(() => import("./sections/ExperiencesSection"));

const App: Component = () => {
  return (
    <>
      <div class="flex h-screen w-4/5 flex-col items-center gap-y-36 *:shrink-0">
        <HeroSection />
        {/* <ValuesSection /> */}
        <section class="flex h-fit flex-col justify-center md:flex-row md:space-x-10">
          <SkillsSection />
          <PlatformsSection />
        </section>
        <ProjectsSection />
        <ExperiencesSection />
        {/* <Blog /> */}
        {/* <ExportSection /> */}
        <footer class="py-10">
          © 2024 Thorbert Anson Shi. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default App;
