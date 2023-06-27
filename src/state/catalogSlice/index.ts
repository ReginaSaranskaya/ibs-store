import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchItemsList } from "./catalogActions";
import { IItem } from "@/api/types";

interface CatalogState {
  items: IItem[];
}

const initialState: CatalogState = {
  items: [],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchItemsList.fulfilled,
      (state, action: PayloadAction<Array<IItem>>) => {
        // eslint-disable-next-line no-param-reassign
        state.items = action.payload;
      }
    );
  },
});

export default catalogSlice.reducer;
