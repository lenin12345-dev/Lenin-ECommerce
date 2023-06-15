'use client'

import React from "react";
import {FilterSection} from '../component/FilterSection';
import {SortSection} from '../component/SortSection';
import {ProductListSection} from '../component/ProductListSection';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';


const Products = () => {
  return <Container sx={{marginTop:8}} maxWidth="xl">
      <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <FilterSection/>
      
    </Grid>

    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
        <Box>
        <Box>
        <SortSection/>

</Box>
<Box>
        <ProductListSection/>

</Box>

        </Box>

      
</Grid>
      </Grid>

  </Container>;
};

export default Products;
