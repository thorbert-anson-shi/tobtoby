import { createContext, createSignal } from 'solid-js';

export const makeThemeContext = (isLightMode: boolean) => {
    const [lightMode, toggleTheme] = createSignal<boolean>(isLightMode);
    return { lightMode, toggleTheme };
}

type Theme = ReturnType<typeof makeThemeContext>;
export const ThemeContext = createContext<Theme>({} as Theme);