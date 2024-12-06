import { type Interpolation, type Theme } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

import { commonPalette, darkPalette, lightPalette } from "./constants";

import IBMPlexRegular from "@/assets/font/IBM_Plex_Sans/IBMPlexSans-Regular.ttf";
import NunitoRegular from "@/assets/font/nunito/NunitoSans_10pt-Regular.ttf";
import AlfaSlabOne from "@/assets/font/AlfaSlabOne/AlfaSlabOne-Regular.ttf";

export let theme = createTheme({});
const getTheme = (mode: "light" | "dark") =>
  createTheme({
    direction: "ltr",
    palette: {
      mode: mode,
      ...commonPalette,
      ...(mode === "dark" ? darkPalette : lightPalette),
      grey1: theme.palette.augmentColor({
        color: {
          main: "#25272f",
          contrastText: "#fff",
        },
        name: "grey1",
      }),
      black: theme.palette.augmentColor({
        color: {
          main: darkPalette.background?.default ?? "#000",
          contrastText: darkPalette.text?.secondary,
        },
        name: "black",
      }),
    },
    shape: { borderRadius: 3.47 },
    typography: {
      fontFamily: "Nunito Sans",
      htmlFontSize: 16,
      h1: {
        fontSize: "6.125rem",
      },
      h2: {
        fontSize: "3.75rem",
      },
      h3: {
        fontSize: "3rem",
      },
      h4: {
        lineHeight: "46.38px",
        fontWeight: 700,
        fontSize: "2.125rem",
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "24.55px",
      },
      subtitle1: {
        fontSize: "1rem",
      },
      subtitle2: {
        fontSize: "0.875rem",
      },
      body1: {
        fontSize: "1rem",
        lineHeight: "21.82px",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
      },
      button: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        lineHeightStep: "20.46px",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "16.37px",
        fontWeight: 400,
      },
      overline: {
        fontSize: "0.625rem",
        fontWeight: "bold",
        lineHeight: "11px",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none !important",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            "&::after , &::before , &:hover:before": {
              border: "none !important",
              outline: "none",
            },
          },
          input: {
            border: "none",
            outline: "none",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'IBM Plex';
          src: local('IBMPlex'), url(${IBMPlexRegular}) format('truetype');
        };
        @font-face {
          font-family: 'Nunito Sans';
          src: local('NunitoSans'), url(${NunitoRegular}) format('truetype');
        };
        @font-face {
          font-family: 'Alfa Slab One';
          src: local('AlfaSlabOne'), url(${AlfaSlabOne}) format('truetype');
        }
      `,
      },
    },
  });

theme = getTheme("dark");
//
export const globalStyles: Interpolation<Theme> = {
  html: {
    backgroundColor: theme.palette.secondary.light + " !important",
    overflowX: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  body: {
    margin: "0 auto" + " !important",
    padding: 0,
    maxWidth: "768px",
    minHeight: "100vh",
    overflowX: "hidden",
    background:
      "radial-gradient(92.77% 33.98% at 49.11% 1.76%, #181A20 16.5%, #202229 100%)",
  },
  "div#root": {
    height: "100%",
  },
  ".hide-scrollbar": {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  "*": {
    borderRadius: theme.shape.borderRadius,
  },
};
