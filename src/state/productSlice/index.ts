import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchItem } from "./productActions";

import { IItem } from "@/api/types";

interface ProductState {
  item: IItem | null;
}

const initialState: ProductState = {
  item: null,
};

const productSlice = createSlice({
  reducers: {},
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fetchItem.fulfilled,
      (state, action: PayloadAction<IItem>) => {
        // eslint-disable-next-line no-param-reassign
        state.item = action.payload;
      }
    );
  },
});

export default productSlice.reducer;
