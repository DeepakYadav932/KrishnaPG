import PhotoGallery from "@/components/photo-gallery/photo-gallery";
import { styleConstants } from "@/lib/constants";
import { MUIStyleType } from "@/models/models";
import theme from "@/theme/theme";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const HomePage = (): React.ReactNode => {
  return (
    <Box
      sx={styles.homePageContainer}
    >
      <Box
        sx={styles.bannerContainer}
      >
        <Grid container>
          <Grid size={12}>
            <Typography
              variant="h3"
              sx={styles.bannerTextStyle}
            >
              Guests are our God
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h6" sx={styles.bannerSubTextStyle}>
              Taking care of our guests is our utmost responsibility
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <PhotoGallery />
    </Box>
  );
};

export default HomePage;

const styles: MUIStyleType = {
  homePageContainer: {
    border: "ButtonShadow",
    margin: "1rem",
  },
  bannerContainer: {
    width: styleConstants.width100,
    height: "10rem",
    position: "relative", // Ensures ::before is contained within this box
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px", // Ensure border radius applies to both background and content
    overflow: "hidden", // Prevents ::before from overflowing
    boxShadow: theme.shadows[3], // Use shadow from theme
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`, // Use transition from theme

    // Background Overlay
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: styleConstants.width100,
      height: "100%",
      backgroundImage: `url('/svg/home.svg')`,
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "color-dodge",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken effect without affecting text
      borderRadius: "inherit", // Ensures the overlay matches the parent border radius // Keeps the overlay behind the content
      opacity: 0.3,
    },
    "&:hover": {
      boxShadow: theme.shadows[5], // Stronger shadow on hover
      transform: "scale(1.01)",
    },
    bannerTextStyle: {
      fontWeight: "bold",
      textAlign: "center",
    },
    bannerSubTextStyle: { textAlign: "center" }
  }
}


