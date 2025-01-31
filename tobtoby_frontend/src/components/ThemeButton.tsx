import { useContext } from "solid-js";
import peenut from "../assets/peenut.png";
import { ThemeContext } from "./contexts/ThemeContext";

export default function ThemeButton() {
  const themeManager = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        themeManager.toggleTheme(!themeManager.lightMode());
      }}
      class={
        "fixed right-8 top-8 !size-20 rounded-xl p-2 " +
        (themeManager.lightMode()
          ? "hover:!bg-neutral-300"
          : "hover:!bg-neutral-700")
      }
      style={{
        "background-color": themeManager.lightMode() ? "#555555" : "#cccccc",
      }}
    >
      <img src={peenut} alt="Toggle Theme" />
    </button>
  );
}
