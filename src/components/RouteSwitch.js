import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "./Home";
import Checkout from "./Checkout";
import Shop from "./Shop";
import Cart from "./Cart";
export default function RouteSwitch(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/shop"
        element={
          <Shop
            cart={props.cart}
            setCart={props.setCart}
            addToCart={props.addToCart}
            resetCart={props.resetCart}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            itemsList={props.cart}
            setCart={props.setCart}
            removeFromCart={props.removeFromCart}
            addToCart={props.addToCart}
          />
        }
      />
      <Route
        path="/checkout"
        element={<Checkout cart={props.cart} resetCart={props.resetCart} />}
      />
    </Routes>
  );
}
