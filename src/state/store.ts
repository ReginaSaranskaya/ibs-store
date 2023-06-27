import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";
import catalogSlice from "./catalogSlice";

const rootReducer = combineReducers({
  catalog: catalogSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
