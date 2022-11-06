import '@emotion/react';

export type ThemeMode = 'light' | 'dark';

declare module '@emotion/react' {
    export interface Theme {
        mode: ThemeMode;
        toggleTheme: () => void;
        typography: {
          family: {
            display: string;
            body: string;
          }
        },
        colors: {
            primary: string;
            contrastLower: string;
            contrastLow: string;
            contrastMedium: string;
            contrastHigh: string;
            contrastHigher: string;
            bg: string;
            bgPaper: string;
        },
        spaces: {
            [key: number]: string
          }
        sizes: {
          sm: string
          md: string
          lg: string
          xl: string
        }
        breakpoints: {
          [key: string]: string
        },
        matchMedias: {
          [key: string]: string
        },
        medias?: [null, string][],
    }
}
