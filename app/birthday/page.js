"use client";
import React, { useState } from "react";
import Image from "next/image";
import CardHeader from "../components/header";
import { BsFolderPlus } from "react-icons/bs";
import DatePicker from "react-datepicker";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
const Birthday = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    // {/* //justifyContent="center" display="flex" alignItems="center" */}
    <Box
      height={500}
      width={600}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      borderRadius="15px"
      sx={{ border: "0.5px solid grey" }}
    >
      {/* <CardHeader /> */}
      <nav>
        <CardHeader />
      </nav>
      <Button variant="contained" color="info" sx={{ width: "auto" }}>
        <BsFolderPlus /> &nbsp; Add
      </Button>
    </Box>

    // <div className="flex justify-center items-center mt-1">
    //   <div className="mockup-window border border-base-300">
    //     <div className="px-4 py-16 bg-base-200">
    //       <CardHeader />
    //       {/* button */}
    //       <button
    //         className="btn btn-success w-full"
    //         onClick={() => document.getElementById("my_modal_2").showModal()}
    //       >
    //         <BsFolderPlus />
    //         Add
    //       </button>
    //       <dialog id="my_modal_2" className="modal">
    //         <div className="modal-box h-96">
    //           <DatePicker
    //             selected={selectedDate}
    //             onChange={handleDateChange}
    //             placeholderText="Select a date"
    //             className="input input-bordered input-info w-full max-w-xs"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Type here"
    //             className="input input-bordered input-info w-full max-w-xs"
    //           />
    //         </div>
    //         <form method="dialog" className="modal-backdrop">
    //           <button>close</button>
    //         </form>
    //       </dialog>
    //       <div className="card w-96 glass">
    //         {/* <div className="card-body"> */}
    //         <div className="my-4 flex justify-between gap-4 items-start">
    //           <p className="card-title text-xl">Harrish</p>
    //           <p className="card-title text-xl">10-10-2022</p>
    //           <p className="card-title text-xl">2</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default Birthday;
