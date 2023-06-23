'use client'
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartValue = () => {
  let localCartData = window.localStorage.getItem("cartValue");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  cart: getCartValue() || [],
  amount: "",
  totalElement:'',
  totalPrice:'',
  shippingFee:500
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cartDetails = (id, amount, stock, color, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, stock, color, singleProduct },
    });
  };
  const removeCartMaterial = (id) => {
    dispatch({ type: "REMOVE_CART_MATERIAL", payload: id });
  };
 const clearCart = ()=>{
  dispatch({type:"CLEAR_CART"})
 }
 const setIncrease = (id) => {
  dispatch({ type: "SET_INCREMENT", payload: id });
};
const setDecrease = (id) => {
  dispatch({ type: "SET_DECREMENT", payload: id });
};

  useEffect(() => {
  
    dispatch({type:"TOTAL_PRICE_CART_ITEM"});
    window.localStorage.setItem("cartValue", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, cartDetails, removeCartMaterial,clearCart,setIncrease,setDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartConetext = () => {
  return useContext(CartContext);
};
