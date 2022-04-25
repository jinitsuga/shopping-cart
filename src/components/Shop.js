import React from "react";
import Meme from "./Meme";
import memes from "./memesdata.js";
import "./Shop.css";

// Establishing a cart State that will contain an array of objects (memes)
// with a name and a price props

export default function Shop(props) {
  const setCart = props.setCart;
  const cart = props.cart;

  const memeslist = memes.map((meme) => {
    return (
      <Meme
        imgsrc={meme.imgsrc}
        key={meme.key}
        name={meme.name}
        price={meme.price}
        addToCart={addToCart}
      />
    );
  });

  function addToCart(meme) {
    const isDuplicate = cart.findIndex((item) => item.name === meme.name);
    if (isDuplicate >= 0) {
      const myCart = cart;
      myCart[isDuplicate].quantity = myCart[isDuplicate].quantity + 1;
      console.log(myCart);
      setCart(myCart);
    } else {
      setCart((oldCart) => {
        return [...oldCart, { ...meme, quantity: 1 }];
      });
    }
  }

  return (
    <section className="shop-section">
      <div className="memes-container">{memeslist}</div>
    </section>
  );
}
