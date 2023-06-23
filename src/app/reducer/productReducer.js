
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "SET_API_DATA":
      const featureProducts = action.payload.filter(
        (each) => each.featured === true
      );
      return {
       ...state,
        isError: false,
        products: action.payload,
        featureProducts: featureProducts,
        // isLoading: false,

      };
    case "SET_API_LOADING":
      return{
       ...state,
        isLoading:false
    }
    case "API_SINGLE_LOADING":
      return {
        ...state,
      };
    case "SET_SINGLE_API_LOADING":
      return{
        ...state,
        isSingleLoading: false,
      }
    case "SET_APISINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,

        singleProduct: action.payload,
      };

    default:
      return state;
  }
};
export default ProductReducer;
