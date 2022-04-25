import React from "react";
import "./Meme.css";
import uniqid from "uniqid";

export default function Meme(props) {
  return (
    <div className="meme-card">
      <img className="meme-img" src={props.imgsrc}></img>
      <h3 className="meme-name">{props.name}</h3>
      <div className="meme-details">
        <span>${props.price}</span>

        {/* Clicking the button calls arrow function that executes the passed 
        function (adds clicked item to cart) */}
        <button
          onClick={() => {
            props.addToCart({
              name: props.name,
              price: props.price,
              key: uniqid(),
            });
          }}
          className="buy-btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
