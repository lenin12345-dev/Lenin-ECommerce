
const cartReducer = (state, action) => {
  if (action.type == "ADD_TO_CART") {
    let { id, amount, singleProduct, color } = action.payload;
    

   let existingProduct = state.cart.find((each)=>each.id== id + color);
   if (existingProduct){
    let updatedCartProduct = state.cart.map((each)=>{
       if (each.id== id + color){
        let newAmount = each.amount + amount

        if (newAmount>=each.max){
          newAmount = each.max
        };
        return{
          ...each ,amount: newAmount}
        
       }
       return each;
    })
    return {...state, cart :updatedCartProduct};

   }else{
    let cartDetails = {
      id: id + color,
      color,
      name: singleProduct.name,
      price: singleProduct.price,
      image: singleProduct?.image[0],
      amount,
      max: singleProduct?.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartDetails],
    };

   }


  }
  if (action.type=="SET_INCREMENT"){
   let updatedCartProduct = state.cart.map((each)=>{
    if (each.id==action.payload){
      let newAmount = each.amount + 1
      if (newAmount>=each.max){
        newAmount = each.max
      }
      return{
        ...each ,amount: newAmount
      }
      
    }
    return each;
   })
   return{
    ...state, cart: updatedCartProduct
   }
  }
  if (action.type=="SET_DECREMENT"){
    let updatedCartProduct = state.cart.map((each)=>{
     if (each.id==action.payload){
       let newAmount = each.amount - 1
       if (newAmount<=1){
         newAmount =1
       }
       return{
         ...each ,amount: newAmount
       }
       
     }
     return each;
    })
    return{
     ...state, cart: updatedCartProduct
    }
   }
  if (action.type == "REMOVE_CART_MATERIAL") {
    let id = action.payload;
    let updatedCart = state.cart.filter((each)=>each.id !== id);
    return {
        ...state,
        cart: updatedCart,
      };

  }
  if (action.type=="CLEAR_CART"){
    return{
      ...state,
      cart:[]
    }
  }
   if (action.type=="TOTAL_PRICE_CART_ITEM"){
   let {updatedItemTotal,updatedItemTotalPrice} = state.cart.reduce((accumulator,currentVal)=>{
     let { amount,price } = currentVal

     accumulator.updatedItemTotal +=amount
     accumulator.updatedItemTotalPrice +=  amount * price; 
    return accumulator;

 
    },{
      updatedItemTotal:0,
      updatedItemTotalPrice:0
    }
    )
 
     return{
       ...state,
      totalElement:updatedItemTotal,
       totalPrice:updatedItemTotalPrice
     }
   }
  return state;
};
export default cartReducer;
