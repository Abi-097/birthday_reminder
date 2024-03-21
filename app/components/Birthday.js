"use client";
import React from "react";
import Image from "next/image";
import { FcCollapse, FcExpand, FcPlus } from "react-icons/fc";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
  Button,
  Grid,
} from "@mui/material";
import Card from "@mui/material/Card";

const Birthday = () => {
  return (
    <div>
      <Card
        sx={{
          width: "40rem",
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
          >
            <FcPlus size={20} /> &nbsp; ADD
          </Button>
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
            <Box>
              <FcExpand />
            </Box>
          </Card>
          {/* <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Birthday;
