import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  useMediaQuery,
  MenuItem,
  IconButton,
} from "@mui/material";
import Image from "next/image";
const currencies = [
  {
    value: "email",
    label: "Email",
  },
  {
    value: "phone",
    label: "Phone",
  },
];

const UpdateDialog = () => {
  const [open, setOpen] = useState(false);
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
        <Image src="/edit.png" alt="edit.png" width={25} height={25} />
      </IconButton>
      {/* Dialog box */}
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxHeight: 800,
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
          {"Update Birthday"}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ width: "100%", mt: 2 }} />
          </LocalizationProvider>

          <TextField
            id="outlined-select-currency"
            select
            label="Choose"
            defaultValue="email"
            sx={{ width: "100%", mt: 2 }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions sx={{ padding: "0px 22px 12px 22px" }}>
          <Button
            variant="contained"
            color="warning"
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

export default UpdateDialog;
