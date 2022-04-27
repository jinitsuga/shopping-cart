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

  // addToCart function first checks if there's an item with the same name in the cart, and if so
  // it simply adds +1 to the quantity of this item. If item is not present, it adds it, with quantity: 1

  function addToCart(meme) {
    const index = cart.findIndex((item) => item.name === meme.name);
    if (index >= 0) {
      const newCart = cart.slice();
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart((oldCart) => {
        return [...oldCart, { ...meme, quantity: 1 }];
      });
    }
  }
  // Subtract -1 quantity if quantity is higher than 1. Remove item if quantity === 1
  function removeFromCart(item) {
    console.log(cart);
    const index = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (index >= 0) {
      const myCart = cart.slice();
      if (myCart[index].quantity > 1) {
        myCart[index].quantity--;
        setCart(myCart);
      } else if (myCart[index].quantity === 1) {
        const removedItems = myCart.splice(index, 1);
        setCart(myCart);
      }
    }
  }

  return (
    <div className="App">
      <Nav cart={cart} />
      <RouteSwitch
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      ;
      <Footer />
    </div>
  );
}

export default App;
