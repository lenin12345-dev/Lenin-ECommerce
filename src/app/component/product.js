// @refresh reset
// @useClient
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from 'next/link';
import FormatPrice from "../helper";


const useStyles = makeStyles((theme) => ({
  featureImage: {
    position: "relative",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "all 0.5s ease 0s",
    backgroundImage:
      " linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, white 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "100%",
    "&:hover": {
      opacity: 1,
      backgroundPosition: "0%",
    },
  },
  media: {
    height: 200,
  },
  captionImage: {
    content: "''",
    position: "absolute",
    top: "8%",
    right: "10%",
    backgroundColor: "rgb(246, 248, 250)",
    color: "rgb(132, 144, 255)",
    borderRadius: "1rem",
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 17,
    // zIndex:5
  },
}));

export default function Product(each) {
  const classes = useStyles();
  
  return (
    <Box>
      <Card className={classes.featureImage} sx={{ maxWidth: 300,...each.styles }}>
      <Link href={`/product/${each.id}`} >
        <CardActionArea>
          <CardMedia
            component="img"
            image={each.image}
            alt="green iguana"
            className={classes.media}
          />
          <div className={classes.overlay} />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box className={classes.captionImage}>{each.category}</Box>
            <Typography gutterBottom variant="body1" color="text.primary">
              {each.name}
            </Typography>
            <Typography variant="body1" color="primary">
           < FormatPrice price={each.price}/>
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
    </Box>
  );
}
