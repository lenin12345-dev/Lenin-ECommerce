'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useFilterContext } from "../conetext/FilterContext";
import { makeStyles } from "@mui/styles";




const useStyles = makeStyles((theme) => ({
  gridView: {
backgroundColor:'black',
color:'white'
  },
  buttonView: {
    backgroundColor:'white',
    color:'white'
      },


}));

export const SortSection = () => {
  const classes = useStyles();
  const { filterProducts=[], gridView, setGridView, setListView,sortValue,setSortValue } =
  useFilterContext();
  const options = ['lowest','highest','a-z','z-a'];

  return (
  <>
{  filterProducts.length?(   <Box display= 'flex' alignItems= 'center' justifyContent= 'space-between' mb={5} mx={3.5}>
      <Box>
      <IconButton
       className= {gridView?classes.gridView:classes.buttonView}
      //  sx= {{ gridView?backgroundColor:'black':backgroundColor:'white'}}
          onClick={setGridView}>

      
            <GridViewIcon    className= {gridView?classes.gridView:''}  fontSize="medium" />
          </IconButton>
          <IconButton
           onClick={setListView}
     

          >
            <ViewListIcon   className= {!gridView?classes.gridView:''} fontSize="medium" />
          </IconButton>
    </Box>
    <Typography  variant="h6">
        {filterProducts?.length} products avaliable
      </Typography>
      <Autocomplete
      
      id="combo-box-demo"
      size='small'
      value = {sortValue}
      onChange={(event,newValue)=>{
        setSortValue(newValue);
      }}
      options={options}
      sx={{ width: 150}}
      renderInput={(params) => <TextField {...params} 
      margin='dense'
      label="" />}
    />

    </Box>):''}
  </>
 

  )
}
