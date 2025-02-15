// src/theme/theme.ts
import { Nanum_Gothic } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum",
  subsets: ["latin"],
  weight: "400",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#16C47F",
    },
    secondary: {
      main: "#FFD65A",
    },
    background: {
      default: "linear-gradient(to right, #fdc830, #f37335);",
    },
  },
  typography: {
    fontFamily: nanumGothic.style.fontFamily,
    h1: {
      fontSize: "2rem", // Mobile
      fontWeight: 700,
      "@media (min-width:600px)": { fontSize: "3rem" }, // Tablet
      "@media (min-width:960px)": { fontSize: "4rem" }, // Desktop
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (min-width:600px)": { fontSize: "2.5rem" },
      "@media (min-width:960px)": { fontSize: "3.5rem" },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      "@media (min-width:600px)": { fontSize: "2rem" },
      "@media (min-width:960px)": { fontSize: "2.5rem" },
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      "@media (min-width:600px)": { fontSize: "1.75rem" },
      "@media (min-width:960px)": { fontSize: "2rem" },
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 500,
      "@media (min-width:600px)": { fontSize: "1.5rem" },
      "@media (min-width:960px)": { fontSize: "1.75rem" },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      "@media (min-width:600px)": { fontSize: "1.25rem" },
      "@media (min-width:960px)": { fontSize: "1.5rem" },
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      "@media (min-width:600px)": { fontSize: "1.125rem" },
      "@media (min-width:960px)": { fontSize: "1.25rem" },
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:960px)": { fontSize: "1.125rem" },
    },
  },

  //
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },

  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.1)", // Elevation 1
    "0px 4px 8px rgba(0, 0, 0, 0.15)", // Elevation 2
    "0px 6px 12px rgba(0, 0, 0, 0.2)", // Elevation 3
    "0px 8px 16px rgba(0, 0, 0, 0.25)", // Elevation 4
    "0px 10px 20px rgba(0, 0, 0, 0.3)", // Elevation 5
    ...Array(19).fill("none"),
  ],

  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

export default theme;
