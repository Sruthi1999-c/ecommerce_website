import React from "react";
import { useState } from "react";
import useAPI from "/Users/sruthiemula/Desktop/e-commerce/ecommerce/src/Hooks/useAPI";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress, Alert } from "@mui/material";
import { useDispatch,} from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const { data: products, loading, error } = useAPI("https://fakestoreapi.com/products");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <div>
    <h1>List of Products</h1>
 
    <label>Search Product<input
    type = "text" 
     margin="normal"
    value = {search}
    onChange={(e) => setSearch(e.target.value)}
    ></input></label>
    <div className="product-container">
      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <Card>
            <CardMedia component="img" height="200" image={product.image} alt={product.title} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Home;
