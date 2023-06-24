"use client"

import React from 'react'
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import { Button, Typography } from "@mui/material";
import Link from 'next/link';
import {useCartConetext} from '../conetext/CartContext'
import { usePathname } from 'next/navigation'


const CartAmountToggle = ({amount,setIncrease,setDecrease,color,singleProduct={},...otherProps}) => {
const { stock='',price='',id} = singleProduct;
 const {cartDetails} = useCartConetext();
 const pathname = usePathname()
 let url = pathname.substring(1);

//  useEffect(() => {
//   url = pathname.substring(1)
//  console.log('url',url)
//  // You can now use the current URL
//  // ...
// }, [pathname])

  return (
    <>
    <Box display= 'flex' alignItems= 'center' justifyContent={url =='cart'?'center':'start'} mb={2}>
        <IconButton sx={{marginRight:2}} onClick={setDecrease}>
       < RemoveIcon fontSize='large'/>
        </IconButton>
        <Typography sx={{marginRight:2}}  variant="h6">
        {amount}
      </Typography>
      <IconButton onClick={setIncrease}>
       < AddIcon fontSize='large'/>
        </IconButton>


    </Box>
  { url =='cart'?<></>: <Link href= '/cart'>
    <Button onClick={()=>cartDetails(id,amount,stock,color,singleProduct)} color='primary' variant='contained'>
     Add To Cart
    </Button>
    </Link>}
    </>
  )
}

export default CartAmountToggle