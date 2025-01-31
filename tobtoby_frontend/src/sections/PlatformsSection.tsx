import { onMount, useContext } from "solid-js";
import CarouselPage from "../components/CarouselPage";

import html from "../assets/languages/html.svg";
import css from "../assets/languages/css.svg";
import typescript from "../assets/languages/typescript.svg";
import python from "../assets/languages/python.svg";
import java from "../assets/languages/java.svg";
import rust from "../assets/languages/rust.svg";
import rustDark from "../assets/languages/rust-dark.png";

import reactjs from "../assets/frameworks/reactjs.svg";
import solidjs from "../assets/frameworks/solidjs.svg";
import tailwindcss from "../assets/frameworks/tailwindcss.svg";

import nextjsLight from "../assets/frameworks/nextjs-dark.svg";
import nextjsDark from "../assets/frameworks/nextjs-light.svg";

import djangoLight from "../assets/frameworks/django-light.svg";
import djangoDark from "../assets/frameworks/django-dark.svg";

import { ThemeContext } from "../components/contexts/ThemeContext";

export default function PlatformsSection() {
  const languages: [name: string, imagePath: string[]][] = [
    ["HTML", [html, html]],
    ["CSS", [css, css]],
    ["TypeScript", [typescript, typescript]],
    ["Python", [python, python]],
    ["Java", [java, java]],
    ["Rust", [rust, rustDark]],
  ];

  const libraries: [name: string, imagePath: string[]][] = [
    ["React", [reactjs, reactjs]],
    ["Solid", [solidjs, solidjs]],
    ["Tailwind CSS", [tailwindcss, tailwindcss]],
  ];

  const frameworks: [name: string, imagePath: string[]][] = [
    ["Next.js", [nextjsLight, nextjsDark]],
    ["Django", [djangoLight, djangoDark]],
  ];

  const themeManager = useContext(ThemeContext);

  return (
    <div
      id="carousel-container"
      class="flex h-fit basis-2/3 flex-col justify-center"
    >
      <div class="relative flex flex-row">
        <button
          id="scroll-left"
          onClick={() => document.getElementById("carousel")?.scrollBy(-500, 0)}
          class="absolute left-[2px] h-full w-8 duration-200 hover:bg-neutral-300 hover:bg-opacity-30"
        >
          <i class="fa-solid fa-chevron-left" aria-label="scroll left"></i>
        </button>
        <div
          id="carousel"
          style={{
            "border-color": themeManager.lightMode() ? "#222222" : "#f9f9f9",
          }}
          class="flex w-full snap-x snap-mandatory flex-row overflow-x-hidden scroll-smooth *:shrink-0 md:border-x-2"
        >
          <CarouselPage
            dataArrays={[languages]}
            header="Languages"
            id="languages"
          />
          <CarouselPage
            dataArrays={[libraries, frameworks]}
            header="Libraries and Frameworks"
            id="libraries-and-frameworks"
          />
        </div>
        <button
          id="scroll-right"
          onClick={() => document.getElementById("carousel")?.scrollBy(500, 0)}
          class="absolute right-[2px] h-full w-8 duration-200 hover:bg-neutral-300 hover:bg-opacity-30"
        >
          <i class="fa-solid fa-chevron-right" aria-label="scroll right"></i>
        </button>
      </div>
    </div>
  );
}
