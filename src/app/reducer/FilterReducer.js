
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: action.payload,
        allProducts: action.payload,
        isFilterLoading:false,
        filterObj: {
          ...state.filterObj,
          range: Math.max(...action.payload.map((each)=>each.price)),
        },

      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "SORT_PRODUCTS":
      const { filterProducts } = state;

      let newValue = action.payload;

      if (!filterProducts) {
        return state; // Return the current state if filterProducts is undefined or empty
      }

      const sortProducts = (a, b) => {
        if (newValue === "lowest") {
          return a.price - b.price;
        }
        if (newValue === "highest") {
          return b.price - a.price;
        }
        if (newValue === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (newValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      const newSortData = [...filterProducts].sort(sortProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };
    case "SET_FILTER_VALUE":
      const { name, value } = action.payload;
 

      return {
        ...state,
        filterObj: {
          ...state.filterObj,
          [name]: value,
        },
      };
    case "SET_CATEGORY_FILTER":
      const { categoryName } = action.payload;
      return {
        ...state,
        filterObj: {
          ...state.filterObj,
          category: categoryName,
        },
      };

    case "SET_RANGE_FILTER":
      let rangeValue = action.payload;
      return {
        ...state,
        filterObj: {
          ...state.filterObj,
          range: rangeValue,
        },
      };
    case "FILTER_PRODUCTS":
      const { allProducts, filterObj } = state;

      if (!allProducts) {
        return state; // Return the current state if filterProducts is undefined or empty
      }
      let tempFilterProducts = [...allProducts];


      const { text, category, company, range, color } = filterObj;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }
      if (category && category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((each) => {
          return each.category == category;
        });
      }

      if (company && company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (each) => each.company == company
        );
      }
     if (range==0){
      tempFilterProducts = tempFilterProducts.filter((each)=>each.price==0)
     }else{
      tempFilterProducts = tempFilterProducts.filter(
        (each) => each.price <= range
      );
     }

      if (color && color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((each) =>
          each.colors.includes(color)
        );
      }

      return {
        ...state,
        filterProducts: tempFilterProducts ,
      };

    case "CLEAR_FILTER":

      return {
        ...state,
        filterObj: {
          ...state.filterObj,
          text: "",
          category:'all',
          company:'all',
          color: "all",
          maxPrice: 10000000,
          range: Math.max(...action.payload.map((each)=>each.price)),
          minPrice: state.filterObj.minPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
