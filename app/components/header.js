import React from "react";
import Skeleton from "@mui/material/Skeleton";
const CardHeader = () => {
  return (
    <Skeleton sx={{ fontWeight: "500", fontSize: "3rem" }}>
      Birthday Special
    </Skeleton>
  );
};

export default CardHeader;
