import { useContext } from "solid-js";
import { ThemeContext } from "./contexts/ThemeContext";

interface LogoTextProps {
  name: string;
  src: string;
}

export default function LogoText(props: LogoTextProps) {
  const themeManager = useContext(ThemeContext);
  return (
    <div
      class="flex h-fit basis-1/3 flex-col items-center justify-end gap-y-5 text-xl duration-200 md:basis-1/4"
      style={{ color: themeManager.lightMode() ? "#525252" : "#a4a4a4" }}
    >
      <img
        src={props.src}
        alt={props.name}
        class="h-20 max-w-16 object-contain md:max-w-20"
      />
      <p class="max-w-28 text-center text-lg">{props.name}</p>
    </div>
  );
}
