import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import ReactGA from "react-ga4";
import { lazy} from "react";

const Payment = lazy(() => import("./pages/Payment"));
const Cart = lazy(() => import("./pages/Cart"));
const Home =  lazy(() => import("./pages/Home"));

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
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
