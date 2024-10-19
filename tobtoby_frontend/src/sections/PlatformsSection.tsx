import { onMount } from "solid-js";
import CarouselPage from "../components/CarouselPage";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import typescript from "../assets/typescript.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import rust from "../assets/rust.svg";
import reactjs from "../assets/reactjs.svg";
import solidjs from "../assets/solidjs.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import nextjs from "../assets/nextjs.svg";
import django from "../assets/django-light.svg";
import djangoRestFramework from "../assets/django-rest-framework.png";

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

  const frameworks: [name: string, imagePath: string][] = [
    ["Next.js", nextjs],
    ["Django", django],
    ["Django REST framework", djangoRestFramework],
  ];

  let carouselPage: any;
  onMount(() => {
    console.log(django);
    let carouselContainer = document.getElementById("carousel-container");

    if (carouselContainer != null) {
      carouselContainer.style.width =
        carouselPage.getBoundingClientRect().width + "px";
    }
  });

  return (
    <div id="carousel-container" class="flex h-full flex-col justify-center">
      <div class="relative flex flex-row">
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
