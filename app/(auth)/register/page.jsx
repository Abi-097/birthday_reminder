import { Card, TextField, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "@/app/components/common/Button";
import { useForm } from "react-hook-form";
const Register = () => {
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
        {"register" === "register" && (
          <TextField
            id="outlined-basic"
            label="Name"
            color="info"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
            {...register("username", {
              required: "Name is required",
              validate: (value) => {
                if (value.length < 3) {
                  return "Name must have at least 3 Characters";
                }
              },
            })}
          />
        )}

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

export default Register;
