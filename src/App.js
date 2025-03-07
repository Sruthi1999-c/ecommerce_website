import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Payment from "./pages/Payment";
import ReactGA from "react-ga4";
import PaymentSummary from "./pages/paymentsummery";

const TRACKING_ID = "G-SCZDN9PERB"
ReactGA.initialize(TRACKING_ID);

const App =()=> {
  const cartItems = useSelector((state) => state.cart.length);
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} > E-Commerce </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/cart">Cart({cartItems})</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path= "/payment" element = {<Payment/>}></Route>
          <Route path = "/paymentsummery" element = {<PaymentSummary/>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
