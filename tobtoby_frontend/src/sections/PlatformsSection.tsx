import { onMount } from "solid-js";
import CarouselPage from "../components/CarouselPage";

export default function PlatformsSection() {
  const languages: [name: string, imagePath: string][] = [
    ["HTML", "html.svg"],
    ["CSS", "css.svg"],
    ["TypeScript", "typescript.svg"],
    ["Python", "python.svg"],
    ["Java", "java.svg"],
    ["Rust", "rust.svg"],
  ];

  const libraries: [name: string, imagePath: string][] = [
    ["React", "reactjs.svg"],
    ["Solid", "solidjs.svg"],
    ["Tailwind CSS", "tailwindcss.svg"],
  ];

  const frameworks: [name: string, imagePath: string][] = [
    ["Next.js", "nextjs.svg"],
    ["Django", "django-light.svg"],
    ["Django REST framework", "django-rest-framework.png"],
  ];

  let carouselPage: any;
  onMount(() => {
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
