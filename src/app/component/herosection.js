'use client'
import * as React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';



const useStyles = makeStyles((theme) => ({
  heroImage: {
    position:'relative',
    zIndex:5,
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '-38px',
      left: '60%',
      width: '46%',
      height: '68%',
      backgroundColor: 'paleturquoise',
      zIndex:-1
      // other styles for the pseudo-element
    },
  
  },

}));

export default function HeroSection() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">

    <Box mt={12}>
      <Grid container alignItems= "center" spacing={10}>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
        
            <Box >
                <Typography sx={{ color:'#6699FF'}} variant="subtitle1">
                    WELCOME TO
                </Typography>
                <Typography sx={{ marginBottom:2 }} variant='h3'>
                    Lenin Store
                </Typography>
                <Typography mb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.
                </Typography>
                <Button variant="contained" color="primary">
                    Show Now
                </Button>
            </Box>
          
        </Grid>
        <Grid item xs={4}sm={12} md={12} lg={7} xl={7}>
          <Box className = {classes.heroImage} display='flex' justifyContent='flex-end'>
        <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                style={{ width:'80%'}}
              />
              </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>

  );
}
