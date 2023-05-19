import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducers/productReducers";
import cartReducers from "./reducers/cartReducers";
import userReducers from "./reducers/userReducer";
import saveReducers from "./reducers/saveReducers";

const store = configureStore({
  reducer: {
    productsReducer,
    cartReducers,
    userReducers,
    saveReducers,
  },
});

export type GlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; //type of dispatch method from redux store
export default store;
