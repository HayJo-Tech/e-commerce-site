import React from "react";
import Card from "react-bootstrap/Card";
import ProductImage from "../../assets/images/vest.jpg";
import './productCard.css';


export default function ProductCard({
  productName,
  productDescription,
  price,
  size,
  quantity,
}) {
  return (
    <div>
      <Card>
        <Card.Img className="product-card-image" variant="top" src={ProductImage} />
        <Card.Body>
          <Card.Title className="product-card-name">{productName}</Card.Title>
          <Card.Text className="product-card-description">{productDescription}</Card.Text>
          <Card.Text className="product-card-price">{price}</Card.Text>
          <Card.Text className="product-card-size">{size}</Card.Text>
          <Card.Text className="product-card-quantity">{quantity}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
