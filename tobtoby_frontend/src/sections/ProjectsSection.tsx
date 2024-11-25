import { onMount } from "solid-js";
import CarouselPage from "../components/CarouselPage";

import html from "../assets/logos/html.svg";
import css from "../assets/logos/css.svg";
import typescript from "../assets/logos/typescript.svg";
import python from "../assets/logos/python.svg";
import java from "../assets/logos/java.svg";
import rust from "../assets/logos/rust.svg";
import reactjs from "../assets/logos/reactjs.svg";
import solidjs from "../assets/logos/solidjs.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import django from "../assets/logos/django-light.svg";

export default function PlatformsSection() {
  const languages: [name: string, imagePath: string][] = [
    ["HTML", html],
    ["CSS", css],
    ["TypeScript", typescript],
    ["Python", python],
    ["Java", java],
    ["Rust", rust],
  ];

  const libraries: [name: string, imagePath: string][] = [
    ["React", reactjs],
    ["Solid", solidjs],
    ["Tailwind CSS", tailwindcss],
  ];

  const frameworks: [name: string, imagePath: string][] = [["Django", django]];

  let carouselPage: any;
  onMount(() => {
    let scrollableContainer = document.getElementById("scrollable-container");

    if (scrollableContainer != null) {
      scrollableContainer.style.width =
        carouselPage.getBoundingClientRect().width + "px";
    }
  });

  return (
    <div
      id="carousel-container"
      class="flex h-full w-fit flex-col items-center justify-center"
    >
      <div
        id="scrollable-container"
        class="relative flex flex-row justify-center"
      >
        <button
          id="scroll-left"
          onClick={() => document.getElementById("carousel")?.scrollBy(-100, 0)}
          class="absolute left-[2px] h-full w-8 duration-200 hover:bg-neutral-300 hover:bg-opacity-30"
        >
          <i class="fa-solid fa-chevron-left" aria-label="scroll left"></i>
        </button>
        <div
          id="carousel"
          class="flex h-fit w-fit snap-x snap-mandatory flex-row overflow-x-hidden scroll-smooth border-black *:shrink-0 md:h-fit md:border-x-2"
        >
          <CarouselPage
            dataArrays={[languages]}
            header="Languages"
            id="languages"
          />
          <CarouselPage
            ref={carouselPage}
            dataArrays={[libraries, frameworks]}
            header="Libraries and Frameworks"
            id="libraries-and-frameworks"
          />
        </div>
        <button
          id="scroll-right"
          onClick={() => document.getElementById("carousel")?.scrollBy(100, 0)}
          class="absolute right-[2px] h-full w-8 duration-200 hover:bg-neutral-300 hover:bg-opacity-30"
        >
          <i class="fa-solid fa-chevron-right" aria-label="scroll right"></i>
        </button>
      </div>
    </div>
  );
}
