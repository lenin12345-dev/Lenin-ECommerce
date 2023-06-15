'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Product  from './product';
import NoDataCard from "./NoDataCard";


export default function GridView({products=[]}) {


  return (
    <Box display= 'flex' alignItems= 'center' justifyContent= 'space-evenly'  flexWrap= 'wrap'>
        {
          products.length ?(
            products.map((each)=>{
              return(
                  <Product id = {each.id} {...each} styles={{margin:4}} />
              )
        })  
          ) : <NoDataCard  noDataFoundText='No Data Found' styleCardProps={{ style: { height: 600 } }}/>
        }
     
    </Box>
  )
}
