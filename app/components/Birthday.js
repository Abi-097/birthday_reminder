"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FcCollapse, FcExpand, FcPlus } from "react-icons/fc";
import {
  Box,
  Paper,
  Card,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Birthday = () => {
  const [expand, setExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleExpandClick = () => {
    setExpand(!expand);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card
        sx={{
          bgcolor: "#EEEEEE",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h4" fontWeight="bold">
              Birthday Reminder
            </Typography>
          }
          //   subheader="September 14, 2016"
          sx={{ flexDirection: "row-reverse" }}
          avatar={
            <IconButton>
              <Image
                src="/programmer.png"
                alt="programmer.png"
                width={40}
                height={40}
              />
            </IconButton>
          }
        />

        <CardContent>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "5px", width: "100%" }}
            onClick={handleClickOpen}
          >
            <FcPlus size={20} /> &nbsp; ADD
          </Button>
          {/* Dialog box */}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Disagree
              </Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Card sx={{ mt: 6, borderRadius: "12px", height: "100%" }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Abishek</p>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Abishek</p>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Abishek</p>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                padding: "0px 15px 0px 0px", //top right bottom left
              }}
            >
              <IconButton
                onClick={handleExpandClick}
                sx={{
                  transition: "transform 0.5s ease",
                  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {expand ? <FcCollapse /> : <FcExpand />}
              </IconButton>
            </Box>
            {expand && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0px 15px 0px 0px", //top right bottom left
                }}
              >
                <IconButton>
                  <Image
                    src="/edit.png"
                    alt="edit.png"
                    width={25}
                    height={25}
                  />
                </IconButton>
                <IconButton>
                  <Image
                    src="/trash.png"
                    alt="trash.png"
                    width={25}
                    height={25}
                  />
                </IconButton>
              </Box>
            )}
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default Birthday;
