"use client";
const images = [
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Nature Landscape",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Mountain View",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Forest Path",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Flowing River",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sunny Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Waterfall",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Desert Dunes",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Peaceful Lake",
  },
  {
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Tropical Island",
  },
];

import { MUIStyleType } from "@/models/models";
import theme from "@/theme/theme";
import {
  ImageList,
  ImageListItem,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";


export default function PhotoGallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
    <Typography variant="h4" sx={styles.photoGalleryHeading}> Photo Gallery </Typography>
    <ImageList cols={isMobile ? 2 : 3} gap={8} className="m0">
      {images.map((item, index) => (
        <ImageListItem
          key={index}
          sx={styles.imageListItem}
        >
          {/* Image */}
          <Image
            src={item.img}
            loader={() => item.img}
            alt={item.title}
            width={800}
            height={500}
            layout="responsive"
            style={styles.imageStyle}
            unoptimized
          />

          {/* Overlay */}
          <Box
            className="overlay"
            sx={styles.overlayBoxStyle}
          >
            <Typography
              variant="h6"
              sx={styles.photoGalleryImageTextStyle}
            >
              {item.title}
            </Typography>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

const styles: MUIStyleType = {
  photoGalleryHeading: { marginTop: theme.spacing(2)},
  imageListItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    "&:hover .overlay": { opacity: 1 }, // Show overlay on hover
  },
  imageStyle: {
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  overlayBoxStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
    opacity: 0, // Initially hidden
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoGalleryImageTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  }
}
