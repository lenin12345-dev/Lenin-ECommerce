'use client'
import * as React from "react"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import CartAmountToggle from './CartAmountToggle'

const useStyles = makeStyles((theme) => ({

  }));
export default function AddToCart({singleProduct,colors}) {
  const classes = useStyles();

const [color,setColor] = React.useState(colors[0])
const { stock='',price='',id} = singleProduct;
const [amount,setAmount] = React.useState(1);
const setIncrease = ()=>{
  amount<stock? setAmount(amount +1) : setAmount(amount)
}
const setDecrease = ()=>{
  amount>1? setAmount(amount-1) : setAmount(amount)
}
  return (
<>
    <Box display= 'flex' alignItems= 'center' my={2}>
        Color:
     {
       colors.length && colors.map((currColor, index) => {
            return(
                <IconButton key={index} sx={{color:`${color}` }}aria-label="Tick Button"
                onClick={() => setColor(currColor)}>
                
               {color===currColor? <CheckCircleIcon fontSize="medium" />:<CircleIcon sx={{color:`${currColor}` }} fontSize="medium" />}
              </IconButton>
            )

        
        }
        )    
        
     }
    </Box>
    <CartAmountToggle singleProduct={singleProduct} color={color} amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
    </>

  );
}
