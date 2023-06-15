'use client'
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircleIcon from '@mui/icons-material/Circle';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {useCartConetext} from '../conetext/CartContext'
import CartAmountToggle from './CartAmountToggle'
import { Button } from "@mui/material";
import Link from 'next/link';
import NoDataCard from "./NoDataCard";
import Divider from '@mui/material/Divider';
import FormatPrice from "../helper";
const CartTable = ({ cart }) => {
  const {removeCartMaterial,clearCart,setIncrease,setDecrease,totalPrice,shippingFee} = useCartConetext();




  if (!cart.length){
    return <NoDataCard noDataFoundText='No Cart Item Added'/>
  }



  return (
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={row.image?.url}   sx={{ width: 40,borderRadius:10, height: 40 }}/>
                  </ListItemAvatar>
                  <ListItemText primary={row.name} secondary= {
                    <Box display='flex' alignItems= 'center'>
                      <Typography variant="subtitle1">color:</Typography>  <CircleIcon sx={{color:`${row.color}` }} fontSize="small" />
                    </Box>
                  }
                  />
                  
                </ListItem>
              </TableCell>
              <TableCell align="right"><FormatPrice price={row.price}/></TableCell>
              <TableCell align="left"> <CartAmountToggle amount={row.amount} setIncrease={()=>setIncrease(row.id)} setDecrease={()=>setDecrease(row.id)} /></TableCell>
              <TableCell align="right"><FormatPrice price={row.price* row.amount}/></TableCell>
              <TableCell align="right"><IconButton onClick={()=>removeCartMaterial(row.id)}><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <Box my={3} display='flex' justifyContent={'space-between'}>
          <Link href={'/products'}>
          <Button color='primary' variant='contained'>          Continue Shopping
        </Button>
          </Link>
    
        <Button onClick={()=>clearCart()} color='secondary' variant='contained' >
          Clear Cart
        </Button>

      </Box>
      <Box mb={4} display= 'flex' justifyContent='flex-end'>
      <Box  >

        <Paper sx={{padding:3}} elevation={2}>
          <Typography sx={{padding:1}}>
            <span style={{ fontWeight:'600'}}>Subtotal</span> :     <FormatPrice price={totalPrice}/>
          </Typography>
          <Typography sx={{padding:1}}>
          <span style={{ fontWeight:'600'}}> Shipping Fee </span> :    <FormatPrice price={shippingFee}/>
          </Typography>
          <Divider/>
          <Typography sx={{padding:1}}>
          <span style={{ fontWeight:'600'}}>  Order Total</span>  :     <FormatPrice price={totalPrice + shippingFee}/> 
          </Typography>

        </Paper>
      </Box>

      </Box>
      </Box>
  );
};

export default CartTable;
