import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Cart from "./Cart";
export default function RouteSwitch(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/shop"
        element={<Shop cart={props.cart} setCart={props.setCart} />}
      />
      <Route path="/cart" element={<Cart itemsList={props.cart} />} />
    </Routes>
  );
}
