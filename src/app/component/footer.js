// @refresh reset
// @useClient
'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <Box display= 'flex' flexDirection= 'column' alignItems= 'center'  >
      <Box sx={{ backgroundColor:'#F0FFF0', borderRadius:'1rem',maxWidth:'80vw',width:'40vw',padding:'2rem 4rem',boxShadow:'0 2px 4px rgba(0, 0, 0, 0.2)',transform:'translateY(10%)'}} display= 'flex' alignItems= 'center' justifyContent= 'space-between'>
      <Box >

      <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            Ready to get started?
          </Typography>
          <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            Talk to us today
          </Typography>
      </Box>
      <Button variant='contained' color="primary">
       Get started
      </Button>

      </Box>
      <Box py={4} sx={{width:'100%', backgroundColor:'rgb(10, 20, 53)' }} alignItems= 'center' justifyContent= 'space-evenly'  display= 'flex'>
      <Box >

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >
       Lenin The Legend
    </Typography>
    <Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >
    Lorem ipsum dolor, 
    </Typography>

    <Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >

    sit amet consectetur adipisicing elit.
    </Typography>

</Box>
<Box display= 'flex' flexDirection= 'column' alignItems= 'center' mt={2} >

<Typography sx = {{ fontWeight:'500',color:'#ffffff',marginBottom:'4px'}} variant="h6"  >
Subscribe to get important updates
    </Typography>
    <TextField
      label="Enter Text"
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
            color:'white'
          },
          '&::placeholder': {
            color: 'white',
          },
          '& input': {
            color: 'white',
            backgroundColor:'white'
          },
          "& .MuiFilledInput-root": {
            background: "rgb(232, 241, 250)"
          },
          marginBottom:'8px'
        },
      }}
    />
             <Button variant='contained' color="primary">
       Get started
      </Button>
</Box>
<Box >

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >
Follow Us
    </Typography>
    <Box display= 'flex'>
    <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          </Box>
</Box>
<Box >

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >
Call Us
</Typography>

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >

9438703636
    </Typography>
 
</Box>

      </Box>
      <Divider/>
      <Box display= 'flex' sx={{width:'100%', backgroundColor:'rgb(10, 20, 53)',padding:2 }}  alignItems= 'center' justifyContent= 'space-evenly' >

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >
@2023 LeninTechnical. All Rights Reserved
</Typography>

<Box >

<Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >

PRIVACY POLICY
    </Typography>
    <Typography sx = {{ fontWeight:'500',color:'#ffffff'}} variant="h6"  >

    TERMS & CONDITIONS
    </Typography>
</Box>

 
</Box>
    </Box>
  );
}