import { createSlice } from "@reduxjs/toolkit";
import { fetchItemsList } from "./catalogActions";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsList.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.items = action.payload;
    });
  },
});

export default catalogSlice.reducer;
