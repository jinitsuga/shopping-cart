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
        addToCart={props.addToCart}
      />
    );
  });
  // addToCart function first checks if there's an item with the same name in the cart, and if so
  // it simply adds +1 to the quantity of this item. If item is not present, it adds it, with quantity: 1

  return (
    <section className="shop-section">
      <div className="memes-container">{memeslist}</div>
    </section>
  );
}
