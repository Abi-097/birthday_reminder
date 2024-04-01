"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FcCollapse, FcExpand } from "react-icons/fc";
import {
  Box,
  Card,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import AddDialog from "./AddDialog";
import UpdateUser from "./UpdateUser";
import UpdateDialog from "./UpdateDialog";

const Birthday = () => {
  const [expand, setExpand] = useState(false);
  const handleExpandClick = () => {
    setExpand(!expand);
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
          avatar={<UpdateUser />}
        />

        <CardContent>
          <AddDialog />

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
                <UpdateDialog />
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
