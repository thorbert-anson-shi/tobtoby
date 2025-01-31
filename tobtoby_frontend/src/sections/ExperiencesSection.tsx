import { For, useContext } from "solid-js";
import { ThemeContext } from "../components/contexts/ThemeContext";

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
    role: "Peer Educator",
    group: "DDP-0 Fasilkom UI",
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 10),
    active: false,
    description:
      "Along with a partner, I taught a group of 4 mentees the basics of programming, mainly using the Python programming language.",
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
  {
    role: "Software Engineer",
    group: "Narada Cup 2022: Sognare",
    startDate: new Date(2022, 8),
    endDate: new Date(2022, 10),
    active: false,
    description:
      "I created an automated ticketing system using Google Sheets and Google Apps Script. It successfully handled reservations from a total of 195 participants.",
  },
];

export default function ExperiencesSection() {
  const themeManager = useContext(ThemeContext);
  return (
    <section class="flex !h-fit w-4/5 flex-col items-center gap-y-5">
      <h1 class="self-end text-xl font-[600] md:text-3xl">
        Relevant Experiences
      </h1>
      <For each={experiences}>
        {(experience) => (
          <div
            style={{
              "border-color": themeManager.lightMode() ? "#222222" : "#ffffff",
            }}
            class="flex w-full flex-col border-2 p-5"
          >
            <h1 class="text-lg font-[600] md:text-xl">{experience.role}</h1>
            <h2
              style={{
                color: themeManager.lightMode() ? "#525252" : "#a4a4a4",
              }}
            >
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
          </div>
        )}
      </For>
    </section>
  );
}
