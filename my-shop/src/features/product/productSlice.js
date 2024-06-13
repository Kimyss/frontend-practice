import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectproduct: null,
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productList = action.payload;
    },
    getSeletedProduct: (state, action) => {
      state.selectproduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectproduct = null;
    }
  }
});

export const { getAllProducts, getSeletedProduct, clearSelectedProduct } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export const selectproductItem = (state) => state.product.selectproduct;

export default productSlice.reducer;