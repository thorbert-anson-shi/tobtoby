import { JSX } from "solid-js/jsx-runtime";
import { makeThemeContext, ThemeContext } from "./ThemeContext";

export function ThemeProvider(props: { children: JSX.Element }) {
  return (
    <ThemeContext.Provider value={makeThemeContext(false)}>
      {props.children}
    </ThemeContext.Provider>
  );
}
