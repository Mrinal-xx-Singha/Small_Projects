/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch a action
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card
        className="h-100 "
        key={product.id}
        style={{ width: "18rem", textAlign: "center" }}
      >
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center text-center">
        <div className="  align-items-center">{cards}</div>
      </div>
    </>
  );
};

export default Cart;
