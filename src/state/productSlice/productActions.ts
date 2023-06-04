import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItem } from "@/api";

// eslint-disable-next-line import/prefer-default-export
export const fetchItem = createAsyncThunk(
  "product/fetchItem",
  async (id: string) => getItem(id)
);
