import React from "react";
import Meme from "./Meme";
import memes from "./memesdata.js";
import "./Shop.css";

// Establishing a cart State that will contain an array of objects (memes)
// with a name and a price props

export default function Shop() {
  const memeslist = memes.map((meme) => {
    return (
      <Meme
        key={meme.key}
        imgsrc={meme.imgsrc}
        name={meme.name}
        price={meme.price}
        addToCart={addtoCart}
      />
    );
  });
  const [cart, setCart] = React.useState([]);

  function addtoCart(meme) {
    setCart((oldCart) => {
      console.log(cart);
      return [...oldCart, meme];
    });
  }

  return (
    <section className="shop-section">
      <div className="memes-container">{memeslist}</div>
    </section>
  );
}
