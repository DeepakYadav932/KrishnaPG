"use client";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { AppHeader } from "../header/header";
import { useRouter } from "next/navigation";
import { LINKS, styleConstants } from "@/lib/constants";
import {
  DeviceType,
  MenuItemProps,
  MUIStyleType,
  SideBarItemType,
} from "@/models/models";
import theme from "@/theme/theme";

const Sidebar = (): React.ReactNode => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={styles.headerContainer}>
      {/* Button to open sidebar on mobile */}
      <Grid container spacing={1} sx={styles.headerContainerGrid}>
        <Grid
          size={2}
          className={`align-center`} // used global style
          sx={styles.leftHeaderGrid} // for hamburger icon on mobile
        >
          <IconButton onClick={handleToggle}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid size={10} sx={styles.rightHeaderStyle}>
          <AppHeader />
        </Grid>
      </Grid>

      {/* Sidebar for Mobile */}
      <Drawer
        open={open}
        onClose={handleToggle}
        variant="temporary"
        sx={styles.mobileDrawerStyle}
      >
        <MenuList handleToggle={handleToggle} />
      </Drawer>

      {/* Sidebar for Desktop */}
      <Drawer open variant="persistent" sx={styles.desktopDrawerStyle}>
        <Box sx={styles.menuListContainer}>
          <MenuList deviceType={DeviceType.OTHER} handleToggle={handleToggle} />
        </Box>
      </Drawer>
    </Box>
  );
};

export const MenuList = ({
  deviceType = DeviceType.MOBILE,
  handleToggle,
}: MenuItemProps): React.ReactNode => {
  const theme = useTheme();
  const router = useRouter();
  const sideBarItems: SideBarItemType[] = [
    {
      label: "Home",
      path: "/home",
      active: true,
    },
    {
      label: "About",
      path: "/about",
      active: false,
    },
    {
      label: "Rooms",
      path: "/rooms",
      active: false,
    },
  ];
  return (
    <List>
      <ListItem>
        <Grid
          container
          spacing={theme.spacing(5)}
          width={styleConstants.width100}
          className={`row-spaced-center`}
        >
          <Image
            loader={() => LINKS.APP_ICON}
            height={50}
            width={80}
            src={LINKS.APP_ICON}
            alt="Logo"
            unoptimized
          />
          {deviceType === DeviceType.MOBILE && (
            <IconButton sx={styles.listItem} onClick={handleToggle}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
        </Grid>
      </ListItem>
      {sideBarItems.map((item, index) => {
        return (
          <div key={`${item.label}`}>
            <ListItem
              key={`${index}`}
              sx={styles.listItem}
              onClick={() => router.push(item.path)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

const styles: MUIStyleType = {
  headerContainer: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 3,
    height: styleConstants.headerWidth,
  },
  headerContainerGrid: {
    width: styleConstants.width100,
    background: styleConstants.primaryBg,
    padding: "1rem",
    paddingLeft: {
      xs: "0.5rem",
    },
  },
  leftHeaderGrid: {
    display: {
      xs: "flex",
      md: "none", // don't show hamburger icon on desktop
    },
  },
  rightHeaderStyle: {
    marginLeft: {
      xs: 0,
      md: "15rem",
    },
  },
  mobileDrawerStyle: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      width: styleConstants.sideBarWidthMD, // use width of desktop
      boxSizing: "border-box",
      background: styleConstants.primaryBg,
    },
  },
  desktopDrawerStyle: {
    display: { xs: "none", md: "block" },
    "& .MuiDrawer-paper": {
      width: styleConstants.sideBarWidthMD,
      boxSizing: "border-box",
      position: "fixed",
      background: styleConstants.primaryBg,
      top: 0,
      left: 0,
      height: "100%",
      boxShadow: theme.shadows[3]
    },
  },
  menuListContainer: { width: styleConstants.sideBarWidthMD },
  listItem: {
    padding: '12px',
    transition: 'background-color 0.3s ease',
    cursor: "pointer",

    "&: hover" : {
      backgroundColor: theme.palette.secondary.main
    },

    "&: active": {
      backgroundColor: theme.palette.secondary.main,
      transform: 'scale(1.05)'
    }
  },
};
export default Sidebar;
