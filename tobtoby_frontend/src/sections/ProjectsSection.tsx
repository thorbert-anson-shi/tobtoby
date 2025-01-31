import { For } from "solid-js";
import ProjectCard, { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    thumbnail: "",
    altText: "The homepage of Tobtoby",
    projectName: "Tobtoby",
    description: "My personal portfolio. You're looking through it right now!",
    githubLink: "https://github.com/thorbert-anson-shi/tobtoby",
    projectLink: "https://thorbert-anson-shi.github.io/tobtoby/",
  },
  {
    thumbnail: "",
    altText: "TZoom in action",
    projectName: "TZoom",
    description:
      "A simple and community backed typing test. Give it a try if you're interested.",
    githubLink: "https://github.com/thorbert-anson-shi/tzoom",
    projectLink: "https://github.com/thorbert-anson-shi/tzoom",
  },
];

export default function ProjectsSection() {
  return (
    <section class="flex h-fit w-4/5 flex-col justify-center">
      <h1 class="pl-5 text-3xl font-[600]">Projects</h1>
      <div class="flex w-full flex-row gap-x-10 overflow-x-scroll p-5">
        <For each={projects}>{(project) => ProjectCard(project)}</For>
      </div>
    </section>
  );
}
