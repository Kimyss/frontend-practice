import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productList = action.payload;
    }
  }
});

export default productSlice.reducer;

export const { getAllProducts } = productSlice.actions;

export const selectproductList = (state) => state.product.productList;
