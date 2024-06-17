// components/CommonButton.js

import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CommonButton = ({ onClick, variant, color, children, sx, ...props }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      sx={sx}
      {...props}
    >
      {children}
    </Button>
  );
};

CommonButton.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  children: PropTypes.node.isRequired,
};

CommonButton.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default CommonButton;
