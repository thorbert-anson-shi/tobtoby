import { For } from "solid-js";

export default function SkillsSection(props: any) {
  const skills = {
    soft: ["Communication", "Conflict mediation", "Time management"],
    hard: ["Frontend development", "Backend development", "API design", "Git"],
  };

  return (
    <div
      ref={props.ref}
      class="flex h-full w-fit flex-col justify-center text-right text-lg md:items-end md:text-2xl"
    >
      <div class="flex h-fit flex-col">
        <section class="border-l-2 border-black p-3 text-left leading-[1.9] md:border-0 md:p-5 md:text-right">
          <h1 class="text-xl font-[600] md:text-3xl">Soft skills</h1>
          <ul>
            <For each={skills.soft}>
              {(softSkill) => (
                <li class="text-nowrap text-gray-600">{softSkill}</li>
              )}
            </For>
          </ul>
        </section>
        <section class="border-r-2 border-black p-3 leading-[1.9] md:border-0 md:p-5">
          <h1 class="text-xl font-[600] md:text-3xl">Hard skills</h1>
          <ul>
            <For each={skills.hard}>
              {(hardSkill) => (
                <li class="text-nowrap text-gray-600">{hardSkill}</li>
              )}
            </For>
          </ul>
        </section>
      </div>
    </div>
  );
}
