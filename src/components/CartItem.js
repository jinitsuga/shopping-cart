import React from "react";
import "./Cart.css";

export default function cartItem(props) {
  return (
    <div className="cart-item">
      <h3 className="item-name">Meme: {props.name}</h3>
      <span className="item-price"> ${props.price} </span>
      <button className="add-btn" onClick={props.addToCart}>
        +
      </button>
      <span className="quantity">{props.quantity}</span>
      <button className="sub-btn" onClick={props.removeFromCart}>
        -
      </button>
    </div>
  );
}
