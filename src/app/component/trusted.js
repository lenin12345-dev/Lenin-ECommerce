'use client'
import * as React from "react"
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

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
  },
  companyImage:{
    height:100,
    width:'auto',
    
  }

}));

export default function Trusted() {
  const classes = useStyles();


  return (
    <Box sx={{   backgroundColor: 'lightblue',padding:8}}   my={8}>
         <Box display= 'flex' justifyContent= 'center' mb={3} sx={{fontSize:20, fontWeight:'bold'}}>
            Trusted By 1000+ companies
    
    </Box>
    <Box display='flex' justifyContent='space-evenly' alignItems='center' >
    
    <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
              className={classes.companyImage}
            />
              <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
              className={classes.companyImage}

            />
               <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
              className={classes.companyImage}

            />
                <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
              className={classes.companyImage}

            />
                <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
              className={classes.companyImage}

            />
    </Box>

    
    </Box>
  );
}
