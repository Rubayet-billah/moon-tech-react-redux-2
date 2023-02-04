import {
  SEARCH_FILTER,
  TOOGLE_BRAND,
  TOOGLE_STOCK,
} from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    brand: [],
    stock: false,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_BRAND:
      if (!state.filters.brand.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brand: [...state.filters.brand, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brand: state.filters.brand.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case TOOGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };
    case SEARCH_FILTER:
      return {
        ...state,
        keyword: action.payload.toLowerCase(),
      };

    default:
      return state;
  }
};

export default filterReducer;
