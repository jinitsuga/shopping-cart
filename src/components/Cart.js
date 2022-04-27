import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart(props) {
  const cart = props.itemsList;
  const setCart = props.setCart;

  const cartItemsList = props.itemsList.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        key={item.key}
        removeFromCart={() => props.removeFromCart({ name: item.name })}
      />
    );
  });

  return (
    <div className="cart-container">
      {props.itemsList.length > 0 ? (
        <h3>Your shopping cart:</h3>
      ) : (
        <h3>No items in your cart</h3>
      )}
      <div className="cart-items-container">{cartItemsList}</div>
    </div>
  );
}
