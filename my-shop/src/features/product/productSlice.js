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
    }
  }
});

export const { getAllProducts, getSeletedProduct } = productSlice.actions;

export const selectproductList = (state) => state.product.productList;

export default productSlice.reducer;