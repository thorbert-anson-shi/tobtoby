import LogoText from "./LogoText";
import { For } from "solid-js";

interface CarouselPageProps {
  id: string | null;
  header: string;
  dataArrays: [string, string][][];
  ref?: any;
}

export default function CarouselPage(props: CarouselPageProps) {
  return (
    <section
      id={props.id != null ? props.id : ""}
      ref={props.ref}
      class="flex h-full w-fit snap-center flex-col items-center justify-start gap-y-5 md:gap-y-16"
    >
      <header class="text-xl font-[600] md:text-3xl">{props.header}</header>
      <div class="flex w-fit flex-row flex-wrap items-baseline gap-y-10">
        <For each={props.dataArrays}>
          {(dataArray) => (
            <For each={dataArray}>
              {(library) => <LogoText src={library[1]} name={library[0]} />}
            </For>
          )}
        </For>
      </div>
    </section>
  );
}
