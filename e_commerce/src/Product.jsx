/* eslint-disable react/jsx-key */
import { useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector } from 'react-redux'
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
// import { Alert } from "bootstrap";
const Product = () => {

  const dispatch = useDispatch();

  const {data: products,status} = useSelector(state => state.products)
  useEffect(() => {
    // dispatch a action for fetchproducts
    dispatch(getProducts())
    
  }, []);

  if(status ==="loading"){
    return <p>Loading.....</p>
  }

  if(status === "error"){
    return <div className="alert alert-danger text-center" role="alert">
      Something went wrong!!!! try again later
    </div>
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };


  const cards = products.map((product) => (
    <div className="col-md-4  " style={{ marginBottom: "10px" }}  key={product.id}>
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
          <Button variant="primary" onClick={()=>addToCart(product)}>
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
