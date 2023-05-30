import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalogSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  catalog: catalogSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
