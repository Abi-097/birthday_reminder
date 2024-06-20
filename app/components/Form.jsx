"use client";
import React from "react";
import { Card, TextField, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "./common/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: 25,
      }}
    >
      <Card
        sx={{
          width: "400px",
          height: "450px",
          backgroundColor: "#F3EEEA",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src="/logo.png"
          alt="logo.png"
          width={100}
          height={100}
          style={{ display: "block", margin: "auto", marginBottom: "12px" }}
        />
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
          sx={{ width: "100%", mb: 4 }}
        />
        <CommonButton
          color="warning"
          variant="contained"
          sx={{ display: "block", margin: "auto", mb: 2 }}
        >
          Sign In
        </CommonButton>
        <Typography>
          Dont have account? Create{" "}
          <span style={{ color: "green", fontWeight: 600 }}>here</span>
        </Typography>
      </Card>
    </div>
  );
};

export default Form;
