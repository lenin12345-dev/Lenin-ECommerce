// @refresh reset
// @useClient
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Box
        sx={{
          backgroundColor: "#F0FFF0",
          borderRadius: "1rem",
          maxWidth: "80vw",
          width: "40vw",
          padding: "2rem 4rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transform: "translateY(10%)",
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography sx={{ mr: 4, fontWeight: "500" }} variant="h6">
            Ready to get started?
          </Typography>
          <Typography sx={{ mr: 4, fontWeight: "500" }} variant="h6">
            Talk to us today
          </Typography>
        </Box>
        <Button variant="contained" color="secondary">
          Get started
        </Button>
      </Box>
      <Box
        py={6}
        sx={{ width: "100%", backgroundColor: "rgb(10, 20, 53)" }}
        alignItems="start"
        justifyContent="space-evenly"
        display="flex"
      >
        <Box width={"20%"}>
          <Typography
            sx={{ fontWeight: "500", color: "#ffffff" }}
            variant="h6"
            paragraph={true}
          >
            At LeninGeekStore, we are dedicated to providing high-quality
            products and exceptional customer service. We strive to offer a wide
            range of options that cater to every customer's unique needs and
            preferences.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography
            sx={{ fontWeight: "500", color: "#ffffff", marginBottom: "6px" }}
            variant="h6"
          >
            Subscribe to get important updates
          </Typography>
          <TextField
            label="Enter your email"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                  color: "white",
                },
                "&::placeholder": {
                  color: "white",
                  marginBottom: 2,
                },
                "& input": {
                  color: "white",
                  backgroundColor: "white",
                  height: 10,
                },
                "& .MuiFilledInput-root": {
                  background: "rgb(232, 241, 250)",
                },
                marginBottom: "12px",
              },
            }}
          />
          <Button variant="contained" color="secondary">
            Get started
          </Button>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
            Connect with Us
          </Typography>
          <Box display="flex">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" flexDirection={"column"} alignItems={"center"}>
          <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
            Call Us
          </Typography>

          <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
            +29876543210
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        display="flex"
        sx={{ width: "100%", backgroundColor: "rgb(10, 20, 53)", padding: 2 }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
          @ {new Date().getFullYear()} LeninTechGeek. All Rights Reserved
        </Typography>

        <Box>
          <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
            Privacy Policy
          </Typography>
          <Typography sx={{ fontWeight: "500", color: "#ffffff" }} variant="h6">
            Terms && Conditions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
