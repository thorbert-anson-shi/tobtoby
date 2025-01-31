import { ThemeContext } from "./contexts/ThemeContext";
import LogoText from "./LogoText";
import { For, useContext } from "solid-js";

interface CarouselPageProps {
  id: string | null;
  header: string;
  dataArrays: [string, string[]][][];
  ref?: any;
}

export default function CarouselPage(props: CarouselPageProps) {
  const themeManager = useContext(ThemeContext);
  return (
    <section
      id={props.id != null ? props.id : ""}
      ref={props.ref}
      class="flex h-full w-full snap-center flex-col items-center justify-start"
    >
      <header class="mb-5 text-xl font-[600] md:mb-16 md:text-3xl">
        {props.header}
      </header>
      <div class="flex w-full flex-row flex-wrap items-baseline justify-start gap-y-10">
        <For each={props.dataArrays}>
          {(dataArray) => (
            <For each={dataArray}>
              {(library) => (
                <LogoText
                  src={themeManager.lightMode() ? library[1][0] : library[1][1]}
                  name={library[0]}
                />
              )}
            </For>
          )}
        </For>
      </div>
    </section>
  );
}
