import {
  SEARCH_FILTER,
  TOOGLE_BRAND,
  TOOGLE_STOCK,
} from "../actionTypes/actionTypes";

export const filterBrand = (brandName) => {
  return {
    type: TOOGLE_BRAND,
    payload: brandName,
  };
};
export const filterStock = () => {
  return {
    type: TOOGLE_STOCK,
  };
};
export const searchFilter = (keyword) => {
  return {
    type: SEARCH_FILTER,
    payload: keyword,
  };
};
