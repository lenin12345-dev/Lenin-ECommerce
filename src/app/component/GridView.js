'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Product  from './product';
import NoDataCard from "./NoDataCard";
import { useFilterContext } from "../conetext/FilterContext";
import { useProductConetext } from '../conetext/productConetext';
import PageLoader from '../component/PageLoader';


export default function GridView({products=[]}) {
  const { isLoading } = useProductConetext();
  const { isFilterLoading } = useFilterContext();


   if (isLoading && !products.length){
    return <PageLoader/>
   }
 

  return (
    <Box display= 'flex' alignItems= 'center' justifyContent= 'space-evenly'  flexWrap= 'wrap'>

        {
          products.length ? (
            products.map((each)=>{
              return(
                  <Product id = {each.id} {...each} styles={{margin:4}} />
              )
        })  
          ) :null

        }
  {/* {isLoading && !products.length && <PageLoader/>} */}

       {!isLoading && !products.length && <NoDataCard  noDataFoundText='No Data Found' styleCardProps={{ style: { height: 600 } }}/>}

     
    </Box>
  )
}
