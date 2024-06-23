import { Card, Box, Typography, TextField } from "@mui/material";
import React from "react";

const UserUpdate = () => {
  return (
    <Box sx={{ pt: 4, pb: 4, pr: 1, pl: 1 }}>
      <Card
        sx={{
          width: "100%",
          //   maxWidth: 800,
          height: "100%",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          User Update
        </Typography>
        <hr style={{ marginBottom: "15px" }} />
        <TextField
          id="outlined-basic"
          label="Name"
          color="info"
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          color="info"
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          color="info"
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          color="info"
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
      </Card>
    </Box>
  );
};

export default UserUpdate;
