/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";

import Dropdown from "react-bootstrap/Dropdown";

const Product = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    // dispatch a action for fetchproducts
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  if (status === "loading") {
    return <p>Loading.....</p>;
  }

  if (status === "error") {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Something went wrong!!!! try again later
      </div>
    );
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const sortProducts = (type) => {
    const productToSort = [...products];
    if (type === "highest") {
      productToSort.sort((a, b) => b.price - a.price);
    } else if (type === "lowest") {
      productToSort.sort((a, b) => a.price - b.price);
    }
    setSortedProducts(productToSort);
  };

  const cards = sortedProducts.map((product) => (
    <div
      className="col-md-4  "
      style={{ marginBottom: "10px" }}
      key={product.id}
    >
      <Card className="h-100 " style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div className="container ">
      <h1 className="text-center">Product Dashboard</h1>
      {/* Sort Functionality */}

      <div className="toggle d-flex justify-content-end align-items-center text-center">
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            style={{ padding: " 10px 20px", margin: "20px" }}
            id="dropdown-basic"
          >
            sort
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => sortProducts("highest")}>
              Highest Price
            </Dropdown.Item>
            <Dropdown.Item onClick={() => sortProducts("lowest")}>
              Lowest Price
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
