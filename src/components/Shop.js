import React from "react";
import Meme from "./Meme";
import memes from "./memesdata.js";
import "./Shop.css";

const memeslist = memes.map((meme) => {
  return <Meme imgsrc={meme.imgsrc} name={meme.name} price={meme.price} />;
});

export default function Shop() {
  return (
    <section className="shop-section">
      <div className="memes-container">{memeslist}</div>
    </section>
  );
}
