import React from "react";
import "./Cart.css";

export default function cartItem(props) {
  return (
    <div className="cart-item">
      <h3 className="item-name">Meme: {props.name}</h3>
      <div className="item-details">
        <span className="item-price"> ${props.price} </span>
        <div className="add-remove-btns">
          <button className="add-sub-btn" onClick={props.addToCart}>
            +
          </button>
          <span className="quantity">{props.quantity}</span>
          <button className="add-sub-btn" onClick={props.removeFromCart}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
