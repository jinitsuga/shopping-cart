import React from "react";

export default function cartItem(props) {
  return (
    <div className="cart-item">
      <h3 className="item-name">{props.name}</h3>
      <span className="item-price"> ${props.price} </span>
      <button className="add-btn">+</button>
      <span className="quantity">{props.quantity}</span>
      <button className="sub-btn">-</button>
    </div>
  );
}
