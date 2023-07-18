"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";


export default function Contact() {
  return (
    <Box mt={3}>
      <Box mb={3} display="flex" justifyContent="center" flexDirection="column">
        <Typography
          sx={{
            color: "#6699FF",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 4,
          }}
          variant="h4"
        >
          Contact Page
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box
        component="form"
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          fullWidth
          defaultValue="Username"
          sx={{ width: "20%", marginBottom: 3 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
          sx={{ width: "20%", marginBottom: 3 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Write Query here"
          sx={{ width: "20%", marginBottom: 3 }}
        />

        <Button color="secondary" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
