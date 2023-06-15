'use client'
import React from 'react'
import { useFilterContext } from "../conetext/FilterContext";
import GridView from './GridView'
import ListView from './ListView';

export  const ProductListSection = () => {
  const { filterProducts,gridView } = useFilterContext();
  if (gridView===true){
    return <GridView products={filterProducts}/>
  }
  if (gridView===false){
    return <ListView products={filterProducts}/>
  }
  

}
