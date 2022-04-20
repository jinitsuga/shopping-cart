import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}
