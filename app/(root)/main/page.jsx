import UserUpdate from "@/app/components/UserUpdate";
import { Grid, Box } from "@mui/material";

const MainList = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        width: 1500,
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        margin: "auto",
      }}
    >
      {/* Blur effect background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          maxWidth: 1200,
          backdropFilter: "blur(8px)",
          zIndex: -1,
        }}
      />

      {/* Main content grid */}
      <Grid
        container
        spacing={2}
        sx={{
          // p: 4,
          width: "100%",
          height: "100%",
          bgcolor: "transparent",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Grid item xs={8}>
          {/* Content */}
          <Box sx={{ bgcolor: "white" }}>Content A</Box>
          <Box sx={{ bgcolor: "white", p: 2 }}>Content A</Box>
          <Box sx={{ bgcolor: "white", p: 2 }}>Content A</Box>
          <Box sx={{ bgcolor: "white", p: 2 }}>Content A</Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <UserUpdate />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainList;
