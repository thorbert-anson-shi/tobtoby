import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { useContext } from "solid-js";
import { ThemeContext } from "./components/contexts/ThemeContext";

// First section to load
import HeroSection from "./sections/HeroSection";

// Lazy load the other sections to improve responsiveness
//const ValuesSection = lazy(() => import("./sections/ValuesSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const PlatformsSection = lazy(() => import("./sections/PlatformsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ExperiencesSection = lazy(() => import("./sections/ExperiencesSection"));

const ThemeButton = lazy(() => import("./components/ThemeButton"));

const App: Component = () => {
  const themeManager = useContext(ThemeContext);
  return (
    <div
      class="mx-auto flex h-screen w-screen flex-row justify-center overflow-scroll overscroll-none duration-200"
      style={{
        "background-color": themeManager.lightMode() ? "#f9f9f9" : "#222222",
        color: themeManager.lightMode() ? "#1a1a1a" : "#f9f9f9",
      }}
    >
      <main class="flex w-3/4 flex-col items-center gap-y-48 *:shrink-0">
        <ThemeButton />
        <HeroSection />
        {/* <ValuesSection /> */}
        <section class="flex !w-4/5 flex-col justify-center md:flex-row md:space-x-10">
          <SkillsSection />
          <PlatformsSection />
        </section>
        <ProjectsSection />
        <ExperiencesSection />
        {/* <Blog /> */}
        {/* <ExportSection /> */}
        <footer class="!h-fit py-10">
          © 2024 Thorbert Anson Shi. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;
