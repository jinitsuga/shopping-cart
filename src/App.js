import { Route } from "react-router-dom";

import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import RouteSwitch from "./components/RouteSwitch";
import Footer from "./components/Footer";

function App() {
  // The cart state all the way up in the parent component, so
  // things won't re-render (therefore losing Cart contents)
  const [cart, setCart] = React.useState([]);
  return (
    <div className="App">
      <Nav cart={cart} />
      <RouteSwitch cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
