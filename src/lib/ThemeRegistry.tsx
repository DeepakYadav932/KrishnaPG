// src/lib/ThemeRegistry.tsx
"use client"; // Mark this as a Client Component

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        :root {
          --primary-color: ${theme.palette.primary.main};
          --secondary-color: ${theme.palette.secondary.main};
          --primary-bg: ${theme.palette.background.default}
        }
      `}</style>
      <CssBaseline /> {/* Normalize CSS and apply baseline styles */}
      {children}
    </ThemeProvider>
  );
}
