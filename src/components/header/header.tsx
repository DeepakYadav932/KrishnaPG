import { stringConstants } from "@/lib/constants";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import Person2Icon from "@mui/icons-material/Person2";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const AppHeader = (): React.ReactNode => {
  // app header
  return (
    <Grid container className="align-center">
      <Grid size={1} sx={{ display: { xs: "none", md: "block" } }}>
        <IconButton>
          <HomeRepairServiceOutlined />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <Typography variant="h5">{stringConstants.APP_NAME}</Typography>
      </Grid>
      <Grid size={{ xs: 2, md: 1 }} className="align-center">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 2, md: 1 }} className="align-center">
        <IconButton>
          <CallIcon />
        </IconButton>
      </Grid>
      <Grid size={{ xs: 2, md: 1 }} className="align-center">
        <IconButton>
          <Person2Icon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
