import { For } from "solid-js";

interface Experience {
  role: string;
  group: string;
  startDate: Date;
  endDate: Date | null;
  active: boolean;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    group: "Narada Cup 2022: Sognare",
    startDate: new Date(2022, 8),
    endDate: new Date(2022, 10),
    active: false,
    description:
      "I created an automated ticketing system using Google Sheets and Google Apps Script. It successfully handled reservations from a total of 195 participants.",
  },
  {
    role: "Backend Engineer",
    group: "BEM Fasilkom, Information Technology Development Dept.",
    startDate: new Date(2024, 6),
    endDate: null,
    active: true,
    description:
      "Alongside 5 peers, I helped build the backend for Adkesma Issue Tracker using the Django REST Framework.",
  },
];

export default function ExperiencesSection() {
  return (
    <>
      <div
        id="experiences-container"
        class="my-5 flex w-4/5 flex-col items-center gap-y-5"
      >
        <h1 class="self-end text-xl font-[600] md:text-3xl">
          Relevant Experiences
        </h1>
        <For each={experiences}>
          {(experience) => (
            <section class="flex w-full flex-col border-2 border-black p-5">
              <h1 class="text-lg font-[600] md:text-xl">{experience.role}</h1>
              <h2 class="text-neutral-600">
                {experience.group}
                {" | "}
                {experience.startDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
                {" - "}
                {experience.endDate
                  ? experience.endDate?.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })
                  : "Present"}
              </h2>
              <p class="mt-2 border-t-2 border-neutral-300 py-2">
                {experience.description}
              </p>
            </section>
          )}
        </For>
      </div>
    </>
  );
}
