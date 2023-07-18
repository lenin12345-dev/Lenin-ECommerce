"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Hero from '../../../public/image/hero.jpg'
import Image from "next/image";
import { Suspense } from "react";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    position: "relative",
    zIndex: 999,
    height:'auto'
  },
}));

export default function HeroSection() {
  const classes = useStyles();
  let description =
    "LeninStore is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.";
  return (
    <Container maxWidth="lg">
      <Box mt={12}>
        <Grid container alignItems="center" spacing={10}>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Box>
              <Typography sx={{ color: "#6699FF" }} variant="subtitle1">
                WELCOME TO
              </Typography>
              <Typography sx={{ marginBottom: 2 }} variant="h3">
                Lenin Store
              </Typography>
              <Typography mb={2}>{description}</Typography>
              <Button variant="contained" color="secondary">
                Show Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4} sm={12} md={12} lg={7} xl={7}>
            <Box
              className={classes.heroImage}
              display="flex"
              justifyContent="flex-end"
            >
                <Image
          src={Hero}
          alt={"LectureNotes-loader"}
          height={350}
          width={450}
          // className={classes.loader}
        />
    <Suspense fallback={<span>Loading...</span>}>
              <Box
                sx={{
                  position: "absolute",
                  top: -70,
                  right: -80,
                  width: 290,
                  height: 200,
                  backgroundColor: "paleturquoise",
                  zIndex: -100,
                }}
              />
              </Suspense>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
