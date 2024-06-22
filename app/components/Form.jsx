"use client";
import React from "react";
import { Card, TextField, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "./common/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      try {
        const res = await axios.post("/api/auth/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          router.push("/");
        }
      } catch (error) {
        toast.error(error.response.data);
      }
    }

    if (type === "login") {
      try {
        const res = await signIn("credentials", {
          ...data,
          redirect: false,
        });

        if (res.ok) {
          router.push("/main");
        }
      } catch (error) {
        toast.error("Invalid email or password");
      }
    }
  };
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
          height: "100%",
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <div>
              <TextField
                id="outlined-basic"
                label="Name"
                color="info"
                variant="outlined"
                {...register("name", {
                  required: "Name is required",
                  validate: (value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                  },
                })}
                sx={{ width: "100%", mb: 2 }}
              />
              {errors.name && <Typography>{errors.name.message} </Typography>}
            </div>
          )}

          <TextField
            id="outlined-basic"
            label="Email"
            color="info"
            variant="outlined"
            {...register("email", { required: "Email is required" })}
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            color="info"
            variant="outlined"
            {...register("password", {
              required: "Password is required",
              validate: (value) => {
                if (
                  value.length < 5 ||
                  !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                ) {
                  return "Password must be at least 5 characters and contain at least one special character";
                }
              },
            })}
            sx={{ width: "100%", mb: 4 }}
          />

          <CommonButton
            color={type === "register" ? "warning" : "success"}
            variant="contained"
            sx={{ display: "block", margin: "auto", mb: 2 }}
            type="submit"
          >
            {type === "register" ? "Join In" : "Sign In"}
          </CommonButton>
          {type === "register" ? (
            <Typography>
              Already have an account? Sign In{" "}
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "red",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  here
                </span>
              </Link>
            </Typography>
          ) : (
            <Typography>
              Don&#39;t have account? create{" "}
              <Link href="/register" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "green",
                    fontWeight: 600,
                  }}
                >
                  here
                </span>
              </Link>
            </Typography>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Form;
