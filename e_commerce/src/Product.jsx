/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux'
import { add } from "./store/cartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product.target));
  };


  const cards = products.map((product) => (
    <div className="col-md-4  " style={{ marginBottom: "10px" }}>
      <Card className="h-100 " key={product.id} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
