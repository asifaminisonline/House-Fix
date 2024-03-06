import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Data";
import { FaArrowLeft } from "react-icons/fa";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div className="product-details-container">Product not found!</div>;
  }

  return (
    <div>
      <div className="back-to-products-button">
        <Link to="/products">
          <FaArrowLeft /> Back to Products
        </Link>
      </div>
      <div className="product-details-container">
        <div className="product-details-header">
          <h2 className="product-details-title">{product.title}</h2>
          <p className="product-details-price">${product.price}</p>
        </div>
        <img
          className="product-details-image"
          src={product.imageURL}
          alt={product.title}
        />
        <div className="product-details-info">
          <p>{product.description}</p>
          <p>Color: {product.color}</p>
          <div className="product-details-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
