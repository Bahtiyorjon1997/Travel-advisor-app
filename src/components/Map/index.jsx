import React from "react";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import { LocationOnOutlined as LocationOutlinedIcon } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles"

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(mid-width:600px)')
  return (
    <div>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
