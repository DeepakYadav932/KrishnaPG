import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/lib/ThemeRegistry";
import Sidebar from "@/components/sidebar/sidebar"; // Adjust the path to your Sidebar component
import { Box } from "@mui/material";
import { LINKS, stringConstants, styleConstants } from "@/lib/constants";
import { MUIStyleType } from "@/models/models";

export const metadata: Metadata = {
  title: stringConstants.APP_NAME,
  description: stringConstants.APP_DESCRIPTION,
  icons: {
    icon: LINKS.APP_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link key={"App-icon"} rel="icon" href={metadata.icons.icon} />
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ThemeRegistry>
          <Sidebar />
          <Box
            sx={styles.main}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

const styles: MUIStyleType = {
  main: {
    marginLeft: {
      xs: styleConstants.sideBarWidthXS,
      md: styleConstants.sideBarWidthMD,
    },
    marginTop: "5rem",
    height: "100%",
    width: {
      xs: "100%",
      md: "calc(100% - 15rem)",
    },
  },
};
