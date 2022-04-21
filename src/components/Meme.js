import React from "react";
import "./Meme.css";

export default function Meme(props) {
  return (
    <div className="meme-card">
      <img className="meme-img" src={props.imgsrc}></img>
      <h3 className="meme-name">{props.name}</h3>
      <div className="meme-details">
        <span>${props.price}</span>
        <button className="buy-btn">Add to cart</button>
      </div>
    </div>
  );
}
