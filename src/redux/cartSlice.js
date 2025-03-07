import { createSlice } from "@reduxjs/toolkit";
import ReactGA from "react-ga4";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const product = action.payload;
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      ReactGA.event({
        category: "Cart",
        action: "Product Added",
        label: product.title,
        value: product.price,
      })
    },
    removeFromCart: (state, action) => {
        const productId = action.payload;
        const product = state.find((item) => item.id === productId);
        if (product) {
  
            ReactGA.event({
              category: "Cart",
              action: "Product Removed",
              label: product.title,
              value: product.price,
            });
          }
      return state.filter((item) => item.id !== action.payload);
    },
 
    updateQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
    clearCart: () => {
        return []; 
      },
  },
});

export const { addToCart, removeFromCart, updateQuantity ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
