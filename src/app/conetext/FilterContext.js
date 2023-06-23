'use client'

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { useProductConetext } from "./productConetext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();
const initialState = {
  isFilterLoading:true,
  filterProducts: [],
  allProducts: [],
  gridView: true,
  filterObj:{
    text:'',
    category:'all',
    company:'all',
    range: 10000000,
    maxPrice: 10000000,
    minPrice: 0,
    color: "all",

  }
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductConetext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [sortValue, setSortValue] = useState("lowest");
  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set the grid view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const changeSearchValue = (event)=>{
     let value = event.currentTarget.value;
     let name = event.currentTarget.name;
     return dispatch({ type: "SET_FILTER_VALUE",payload:{
      name,
      value
     } });
  }
const setCategoryFilter = (event,value,index)=>{
  setSelectedIndex(index)
  return dispatch({ type: "SET_CATEGORY_FILTER",payload:{
    categoryName:value
  } });
}


const setRangeChange = (event)=>{

  let rangeValue = event.target.value;
  return dispatch({ type: "SET_RANGE_FILTER",payload:rangeValue });
}
const clearFilter = ()=>{
  setSelectedIndex(0);
  return dispatch({type:"CLEAR_FILTER",payload:products})
}

  // to load all the products for grid and ,clist view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // to load all sort products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS", payload: sortValue });
  }, [sortValue, products,state.filterObj]);


  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sortValue,
        setSortValue,
        changeSearchValue,
        setCategoryFilter,
        selectedIndex,
        setRangeChange,
        products,
        clearFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
