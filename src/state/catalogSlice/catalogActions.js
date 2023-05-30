import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItemsList } from "../../api";

// eslint-disable-next-line import/prefer-default-export
export const fetchItemsList = createAsyncThunk(
  "catalog/fetchItemsList",
  getItemsList
);
