// components/CommonCard.js

import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CommonCard = ({
  title,
  content,
  image,
  actions,
  children,
  sx,
  ...props
}) => {
  return (
    <Card {...props}>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          sx={sx}
          alt={title}
        />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        )}
        {content && (
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        )}
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

CommonCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.node,
};

CommonCard.defaultProps = {
  title: null,
  content: null,
  image: null,
  actions: null,
  children: null,
};

export default CommonCard;
