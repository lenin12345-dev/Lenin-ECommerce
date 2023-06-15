// @refresh reset
// @useClient
'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useCartConetext } from '../conetext/CartContext';

export default function Navbar() {
  const {totalElement } = useCartConetext();

  return (
    <Box  >
      <AppBar color='secondary' position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
          <Typography sx = {{ fontWeight:'bold'}} variant="h6" component="div" >
            Lenin Store
          </Typography>

          </Box>
          <Link href={`/`} >
      
          <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            Home
          </Typography>
        </Link>
        <Link href={`/about`} >

          <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            About
          </Typography>
        </Link>

          <Link href={`/products`} >
          <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            Products
          </Typography>
        </Link>

      <Link href={`/contact`} >

          <Typography sx = {{mr:4, fontWeight:'500'}} variant="h6"  >
            Contact
          </Typography>
        </Link>

  <Button sx={{ mr: 4 }} onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })} variant='contained' color="primary">Log Out</Button>

  <Button sx={{ mr: 4 }} onClick={() => loginWithRedirect()} variant='contained' color="primary">Login</Button>


      <Link href={`/cart`} >

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4,position:'relative' }}
          >
            <ShoppingCartIcon />
            <Box sx={{borderRadius:'50%', backgroundColor:'blue',width:25,position:'absolute',top:4,right:-9}}>
            <Typography>{totalElement}</Typography>
            </Box>
          </IconButton>
        </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}