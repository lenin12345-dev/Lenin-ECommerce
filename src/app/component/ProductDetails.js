"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Rating from '@mui/material/Rating';
import AddToCart from '../component/AddToCart'
const useStyles = makeStyles((theme) => ({

}));

export default function ProductDetails({ singleProduct }) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "50%" }}>
      <Typography gutterBottom variant="h3">
        {singleProduct?.name}
      </Typography>
      <Rating sx={{ marginBottom:4 }}  value={singleProduct?.stars} precision={0.1} readOnly />
      <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="subtitle1">
        MRP: {singleProduct?.price + 1000}
      </Typography>
      <Typography
        sx={{ fontWeight: "bold" }}
        color="primary"
        variant="subtitle1"
      >
        Deal of the Day : {singleProduct?.price}
      </Typography>
      <Typography color="primary" component="p">
        {singleProduct?.description}
      </Typography>
      <Box display="flex" justifyContent="space-between" >
        <Box display="grid">
          <IconButton>
            <FireTruckIcon fontSize="medium" />
          </IconButton>
          <Typography component="p">Free Delivery</Typography>
        </Box>
        <Box display="grid">
          <IconButton>
            <PublishedWithChangesIcon fontSize="medium" />
          </IconButton>
          <Typography component="p">30 Days Replacement</Typography>
        </Box>
        <Box display="grid">
          <IconButton>
            <FireTruckIcon fontSize="medium" />
          </IconButton>
          <Typography component="p">Lenin Delivered</Typography>
        </Box>
        <Box display="grid">
          <IconButton>
            <WorkHistoryIcon fontSize="medium" />
          </IconButton>
          <Typography component="p">2 Year Warranty</Typography>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: 2 }} />

      <Typography gutterBottom color="inherit" component="p">
        Available:{" "}
        <span style={{ fontWeight: "bold" }}>
          {singleProduct
            ? singleProduct.stock > 0
              ? "In Stock"
              : "out of stock"
            : "out of stock"}
        </span>
      </Typography>
      <Typography gutterBottom color="inherit" component="p">
        ID:<span style={{ fontWeight: "bold" }}> {singleProduct?.id}</span>
      </Typography>
      <Typography gutterBottom color="inherit" component="p">
        Brand:{" "}
        <span style={{ fontWeight: "bold" }}> {singleProduct?.company} </span>
      </Typography>
      <Divider />
      {singleProduct?.colors?.length && <AddToCart singleProduct={singleProduct} colors={singleProduct?.colors}/>}
    </Box>
  );
}
