// @refresh reset
// @useClient
'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { useProductConetext } from '../conetext/productConetext';;
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Product  from './product';


export default function FeatureProduct() {

    const { isLoading,featureProducts } = useProductConetext();

  return (
    <Container maxWidth="lg">
        
<Box mt={10} mb={4} >
<Typography color= 'primary'>
            Check now
        </Typography>
        <Typography sx={{marginBottom:6}} variant='h4' fontWeight='bold'>
            Our Feature Services
        </Typography>
    <Box display= 'flex' alignItems= 'center' justifyContent= 'space-between'  >
       
     {
    featureProducts && featureProducts.length && featureProducts.map((each)=>{
        return(
            <Product id = {each.id} {...each} />
        )
     })   
     }
      
    </Box>
    </Box>
    </Container>

  );
}