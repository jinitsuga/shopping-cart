import React from "react";
import Meme from "./Meme";
import memes from "./memesdata.js";
import "./Shop.css";

// Establishing a cart State that will contain an array of objects (memes)
// with a name and a price props

export default function Shop(props) {
  const setCart = props.setCart;
  const cart = props.cart;
  console.log(cart);
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
    setCart((oldCart) => {
      return [...oldCart, { ...meme, quantity: 1 }];
    });
  }

  return (
    <section className="shop-section">
      <div className="memes-container">{memeslist}</div>
    </section>
  );
}
