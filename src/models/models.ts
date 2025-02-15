import { SxProps } from "@mui/material";

// Style Models
export type MUIStyleType =  Record<string, SxProps<Theme>>


/* --------- Generic Use Models -------- */

// sidebar Item 
export type SideBarItemType = {
  label: string;
  path: string,
  active: boolean
}

// side bar menu list Item
export type MenuItemProps = {
  deviceType: DeviceType;
  handleToggle: () => void;
}

export enum DeviceType{
  MOBILE,
  OTHER
}



