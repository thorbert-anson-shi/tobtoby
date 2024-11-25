export interface Project {
    thumbnail: string;
    altText: string;
    projectName: string;
    description: string;
    githubLink: string;
    projectLink: string;
  }
  
  export default function ProjectCard(props: Project) {
    return (
      <div class="hover-float flex h-fit shrink-0 basis-[full] flex-col border-2 border-black md:basis-1/2">
        <img
          src={props.thumbnail}
          alt={props.altText}
          draggable={false}
          class="flex h-96 shrink-0 flex-col justify-center border-b-2 border-black object-cover text-center"
        />
        <div class="flex h-48 flex-col p-5 leading-snug">
          <h1 class="text-lg font-[600]">{props.projectName}</h1>
          <p>{props.description}</p>
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
  