import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethod: "",
  address: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setPaymentMethod, setAddress } = paymentSlice.actions;
export default paymentSlice.reducer;
