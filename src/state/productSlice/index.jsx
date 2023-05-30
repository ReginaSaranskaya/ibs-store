import { createSlice } from "@reduxjs/toolkit";
import { fetchItem } from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    item: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.item = action.payload;
    });
  },
});

export default productSlice.reducer;
