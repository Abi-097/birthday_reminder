import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

import Image from "next/image";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  useMediaQuery,
  OutlinedInput,
  IconButton,
} from "@mui/material";

const UpdateUser = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Image
          src="/programmer.png"
          alt="programmer.png"
          width={40}
          height={40}
        />
      </IconButton>
      {/* Dialog box */}
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxHeight: 500,
            borderRadius: "16px",
          },
        }}
        maxWidth="sm"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ fontWeight: 500, fontSize: "25px" }}
        >
          {"User Details"}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Phone No"
            variant="outlined"
            sx={{ width: "30%", mt: 2, mr: 1 }}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "68%", mt: 2 }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ width: "100%", mt: 2 }}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            sx={{ width: "49%", mt: 2, mr: 1 }}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            sx={{ width: "49%", mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ padding: "0px 22px 12px 22px" }}>
          <Button
            variant="contained"
            color="success"
            autoFocus
            onClick={handleClose}
            sx={{ width: "70%" }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            autoFocus
            sx={{ width: "30%" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateUser;
