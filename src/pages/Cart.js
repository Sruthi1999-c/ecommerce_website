import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Button, Typography, Card, CardContent, TextField, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart =React.memo(()=> {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Math.max(1, quantity) }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Card key={item.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>Price: ${item.price}</Typography>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                size="small"
                sx={{ width: "60px", marginRight: "10px" }}
              />
              <Button variant="outlined" color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
      <Button variant="contained" color="success" fullWidth onClick={() => navigate("/payment")}>
        Proceed to Payment
      </Button>
    </Container>
  );
})

export default Cart;
