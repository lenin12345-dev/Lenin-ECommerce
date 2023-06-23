'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer'

const AppContext = createContext();
 
const API = "https://api.pujakaitem.com/api/products ";

const initialState = {
  isLoading: true,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:true,
  singleProduct:{

  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "API_LOADING" });

    try {
      const response = await axios.get(API);
      const products = await response.data;

      dispatch({ type: "SET_API_DATA",payload:products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "API_SINGLE_LOADING" });

    
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;

      dispatch({ type: "SET_APISINGLE_DATA",payload:singleProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  useEffect(() => {
    getProducts();   
  }, []);
  useEffect(() => {
  if (state.products.length)  dispatch({ type: "SET_API_LOADING" });  
  }, [state.products]);
  useEffect(() => {
    if (state.singleProduct?.image?.length)  dispatch({ type: "SET_SINGLE_API_LOADING" });  
    }, [state.singleProduct]);
  return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>;
};

const useProductConetext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext,useProductConetext };
