import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="cart-container">
      <h3 className="cart-title">Your Cart</h3>
      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                className="cart-product-page-image"
                src={item.imageURL}
                alt={item.title}
              />
              <h2 className="cart-item-title">{item.title}</h2>
              <span>{item.price}</span>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="cart-empty-cart-message">
            <p>Your cart is empty</p>
            <Link to="/products">
              <button className="go-back">Back To Products</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
