import React, { useEffect, useMemo } from 'react'
import { ThemeProvider as EmotionThemeProvider, Theme } from '@emotion/react'
import type { ThemeMode } from "./theme";

const theme: Omit<Theme, "toggleTheme" | "mode" | "matchMedias"> = {
    typography: {
        family: {
            display: "var(--font-family-display)",
            body: "var(--font-family-body)",
        }
    },
    colors: { 
        primary: "var(--color-primary)",
        contrastLower: "var(--color-contrast-lower)",
        contrastLow: "var(--color-contrast-low)",
        contrastMedium: "var(--color-contrast-medium)",
        contrastHigh:"var(--color-contrast-high)",
        contrastHigher: "var(--color-contrast-higher)",
        bg: "var(--color-bg)",
        bgPaper: "var(--color-bg-paper)",
    },
    sizes: {
        sm: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
    spaces: {
        0: "0",
        1: "4px",
        2: "8px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "40px",
        7: "48px",
        8: "64px",
        9: "80px",
        10: "120px",
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
    }
};

type ThemeProviderProps = {
    children: React.ReactNode
}

type Result = {
    breakpoints: Theme["breakpoints"];
    matchMedias: Theme["matchMedias"];
}

const getBreakpoints = ({ breakpoints }: Pick<Theme, "breakpoints">): Result => {
    const result = {
        breakpoints: {},
        matchMedias: {},
    } as any;

    Object.entries(breakpoints).forEach(([key, value]) => {
      result.breakpoints[key] = `@media (min-width: ${value})`;
      result.matchMedias[key] = `(min-width: ${value})`;
    })
  
    return result;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = React.useState<ThemeMode>("light");
    const toggleTheme = () => setMode( currentMode => currentMode === "light" ? "dark" : "light");

    const themeWithMode: Theme = useMemo(() => ({
        ...theme,
        ...getBreakpoints(theme),
        mode,
        toggleTheme,
    }), [mode]);

    useEffect(() => {
        const query = window.matchMedia('(prefers-color-scheme: dark)');
        query.matches && setMode("dark");
        
        const handler = (e: MediaQueryListEvent) => setMode(e.matches ? "dark" : "light");
        
        query.addEventListener("change", handler);
        return () => query.removeEventListener("change", handler);
    }, []);
    
    useEffect(() => {
        const root = window.document.documentElement;
        root?.setAttribute("data-theme", mode);

        const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        favicon.href = mode === "dark" ? "/favicon-dark.svg" : "/favicon.svg";
    }, [mode]);

    return (
        <EmotionThemeProvider theme={themeWithMode}>
            {children}
        </EmotionThemeProvider>
    );
}

export default ThemeProvider