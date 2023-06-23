'use client'
import React from 'react'
import { useFilterContext } from "../conetext/FilterContext";
import GridView from './GridView'
import ListView from './ListView';
import PageLoader from '../component/PageLoader';
import { useProductConetext } from '../conetext/productConetext';

export  const ProductListSection = () => {
  const { filterProducts,gridView } = useFilterContext();
  const { isLoading } = useProductConetext();


  // if (isLoading && !filterProducts.length  ){
  //   return <PageLoader/>
  // }
 

  if (gridView===true){
    return <GridView products={filterProducts}/>
  }else{
    return <ListView products={filterProducts}/>
  }
  

}
