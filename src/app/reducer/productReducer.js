
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
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featureProducts,
      };
    case "API_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
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
