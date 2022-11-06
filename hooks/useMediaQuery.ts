import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
    const [ matches, setMatches ] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const mediaQueryList = window.matchMedia(theme.matchMedias[query] || query);
        setMatches(mediaQueryList.matches);

        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
        mediaQueryList.addEventListener("change", listener);
        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, [query, theme.matchMedias]);

    return matches;
}