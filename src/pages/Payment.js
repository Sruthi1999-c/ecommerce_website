import React, { useState } from "react";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { setPaymentMethod, setAddress } from "../redux/paymentslice";
import {
  Box, Typography, Paper, Button, TextField, Radio, 
  RadioGroup, FormControlLabel, List, ListItem, ListItemAvatar, 
  Avatar, ListItemText, Divider
} from "@mui/material";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Fetching cart items and total price
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Payment method & address state
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
    handlePurchase();
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    ReactGA.event({
      category: "Checkout",
      action: "Purchase Completed",
      label: "User completed a purchase",
      value: totalPrice,
    });

    navigate("/");
    dispatch(clearCart());
  };

  return (
    <Paper elevation={4} sx={{ maxWidth: 600, margin: "30px auto", padding: 3, borderRadius: 3 }}>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Payment Summary
      </Typography>

      {/* Cart Items List */}
      {cartItems.length === 0 ? (
        <Typography variant="body1" color="error" textAlign="center">
          Your cart is empty
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.title} sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText 
                  primary={item.title} 
                  secondary={`Quantity: ${item.quantity} | Price: $${item.price.toFixed(2)}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      {/* Total Price */}
      <Typography variant="h6" textAlign="center" mt={2} fontWeight="600">
        Total: ${totalPrice.toFixed(2)}
      </Typography>

      {/* Payment Method Selection */}
      <Box mt={3}>
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
      <Box mt={2}>
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
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }} onClick={handleAddressSave}>
          Save Address
        </Button>
      </Box>

      {/* Action Buttons */}
      <Box mt={3} display="flex" flexDirection="column" gap={2}>
        <Button variant="contained" color="success" fullWidth onClick={handleSubmit}>
          Place Order
        </Button>
      </Box>
    </Paper>
  );
};

export default Payment;



