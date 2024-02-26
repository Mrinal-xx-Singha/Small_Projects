/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



const Cart = () => {
const products =useSelector(state =>state.cart)

const cards = products.map((product) => (
  <div className="col-md-12  " style={{ marginBottom: "10px" }}>
    <Card className="h-100 "
     key={product.id} 
    style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "100px", height: "130px" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">
          Remove Item
        </Button>
      </Card.Body>
    </Card>
  </div>
));

  return (
    <>
    <div className="row">{cards}</div>
    </>

  )
}

export default Cart