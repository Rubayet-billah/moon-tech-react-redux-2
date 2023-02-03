import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actionTypes/actionTypes";

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
