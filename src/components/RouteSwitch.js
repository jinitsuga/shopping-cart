import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Cart from "./Cart";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
