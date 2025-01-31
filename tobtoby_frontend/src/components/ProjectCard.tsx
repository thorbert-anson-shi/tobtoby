import { useContext } from "solid-js";
import { ThemeContext } from "./contexts/ThemeContext";

export interface Project {
  thumbnail: string;
  altText: string;
  projectName: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

export default function ProjectCard(props: Project) {
  const themeManager = useContext(ThemeContext);
  return (
    <div
      style={{
        "border-color": themeManager.lightMode() ? "#222222" : "#ffffff",
      }}
      class={
        "flex h-fit w-full shrink-0 flex-col border-2 md:w-96 " +
        (themeManager.lightMode() ? "hover-float" : "hover-glow")
      }
    >
      <img
        src={props.thumbnail}
        alt={props.altText}
        draggable={false}
        class="flex h-96 shrink-0 flex-col justify-center border-b-2 border-inherit object-cover text-center"
      />
      <div
        class={
          "flex h-48 flex-col bg-gradient-to-b p-5 leading-snug " +
          (themeManager.lightMode()
            ? "from-neutral-200 to-neutral-300"
            : "from-neutral-800 to-neutral-700")
        }
      >
        <h1 class="text-lg font-[600]">{props.projectName}</h1>
        <p style={{ color: themeManager.lightMode() ? "#525252" : "#a4a4a4" }}>
          {props.description}
        </p>
        <div
          id="links"
          class="flex grow flex-row items-end justify-end gap-x-5 justify-self-end pt-5 text-xl"
        >
          <a href={props.githubLink} target="_blank">
            <i
              class="fa-brands fa-github hover:text-neutral-400"
              aria-label={props.projectName + " GitHub repository"}
            ></i>
          </a>
          <a href={props.projectLink} target="_blank">
            <i
              class="fa-solid fa-arrow-up-right-from-square hover:text-neutral-400"
              aria-label={props.projectName + " deployment"}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
