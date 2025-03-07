import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import Middleware from "./Middleware";
import paymentReducer from "./paymentslice"


const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer, 
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Middleware),
});

export default store;
