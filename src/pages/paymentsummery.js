import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod, setAddress } from "../redux/paymentslice";
import { 
  Box, Typography, Radio, RadioGroup, FormControlLabel, 
  TextField, Button, Paper 
} from "@mui/material";

const PaymentSummary = () => {
  const dispatch = useDispatch();
  const { paymentMethod, address } = useSelector((state) => state.payment) || {};

  const [localAddress, setLocalAddress] = useState(address);

  const handlePaymentChange = (event) => {
    dispatch(setPaymentMethod(event.target.value));
  };

  const handleAddressChange = (event) => {
    setLocalAddress(event.target.value);
  };

  const handleAddressSave = () => {
    dispatch(setAddress(localAddress));
  };

  const handleSubmit = () => {
    if (!paymentMethod || !localAddress) {
      alert("Please select a payment method and enter an address.");
      return;
    }
    alert(`Order placed with ${paymentMethod} and address: ${localAddress}`);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: "20px auto", padding: 3 }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Payment Summary
      </Typography>

      {/* Payment Method Selection */}
      <Box mb={2}>
        <Typography variant="subtitle1" fontWeight="600">
          Select Payment Method
        </Typography>
        <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
          <FormControlLabel value="Google Pay" control={<Radio />} label="Google Pay" />
          <FormControlLabel value="PhonePe" control={<Radio />} label="PhonePe" />
          <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery (COD)" />
        </RadioGroup>
      </Box>

      {/* Address Section */}
      <Box mb={2}>
        <Typography variant="subtitle1" fontWeight="600">
          Enter Address
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={3}
          variant="outlined"
          value={localAddress}
          onChange={handleAddressChange}
          placeholder="Enter your delivery address"
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 1 }} 
          onClick={handleAddressSave}
        >
          Save Address
        </Button>
      </Box>

      {/* Place Order Button */}
      <Button variant="contained" color="success" fullWidth onClick={handleSubmit}>
        Place Order
      </Button>
    </Paper>
  );
};

export default PaymentSummary;
