import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart(props) {
  const cart = props.itemsList;
  const setCart = props.setCart;

  const total = Math.floor(
    cart.reduce(function (previous, current) {
      return previous + current.price * current.quantity;
    }, 0)
  );

  const cartItemsList = props.itemsList.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        key={item.key}
        removeFromCart={() => props.removeFromCart({ name: item.name })}
        addToCart={() => props.addToCart({ name: item.name })}
      />
    );
  });

  return (
    <div className="cart-container">
      {props.itemsList.length > 0 ? (
        <div className="cart-on-use">
          <h3 className="cart-title">Your shopping cart:</h3>
          <div className="cart-items-container">{cartItemsList}</div>
          <span className="cart-total">Total: ${total}</span>
        </div>
      ) : (
        <h3 className="cart-title">No items in your cart</h3>
      )}
    </div>
  );
}
