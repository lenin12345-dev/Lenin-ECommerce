'use client'
import * as React from "react"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
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
  gridItem:{
    display: 'flex',
    alignItems:'space-around',
    flexDirection:'column',
    paddingTop:0
  }

}));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#B0E0E6',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    height:'250px',
    justifyContent:'center'
  }));
  const MediumItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#B0E0E6',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    height:'100px',
    justifyContent:'center'
  }));
export default function Services() {
  const classes = useStyles();


  return (
    <Container maxWidth="lg">

    <Box my={12}>
      <Grid container  alignItems= "center" spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        
            <Item >
            <LocalShippingIcon/>
            <Typography sx={{ marginTop:4 }}>
            Super Fast and Free Delivery
            </Typography>
    
            </Item>
          
        </Grid>
        <Grid container spacing={6} item flexDirection= 'column' xs={12}sm={12} md={12} lg={4} xl={4}>

        <Grid item >

          <MediumItem >
          <DoNotTouchIcon/>
          <Typography sx={{ marginLeft:4 }}>

            No contact Shipping
            </Typography>
    
              </MediumItem>
        </Grid>
        <Grid item >

              <MediumItem >
          <CurrencyExchangeIcon/>
          <Typography sx={{ marginLeft:4 }}>

            Money back Guranted
            </Typography>

    
              </MediumItem>
        </Grid>


        </Grid>
        <Grid item xs={12}sm={12} md={12} lg={4} xl={4}>
        <Item >
            <PaymentsIcon/>
          <Typography sx={{ marginTop:4 }}>

            Super Secure Payment System
            </Typography>

    
            </Item>
        </Grid>
      </Grid>
    </Box>
      </Container>

  );
}
