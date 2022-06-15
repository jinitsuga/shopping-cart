import React from "react";
import "./Checkout.css";
export default function Checkout(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);
  const [buyerName, setBuyerName] = React.useState("");
  const [buyerLocation, setBuyerLocation] = React.useState("");
  const [isOrderSent, setIsOrderSent] = React.useState(false);
  const cart = props.cart;
  const total = Math.floor(
    cart.reduce(function (previous, current) {
      return previous + current.price * current.quantity;
    }, 0)
  );
  // need to send total price and resetCart from props
  function keepBrowsing() {}
  function placeOrder() {
    props.resetCart();
    console.log(
      "Thank you " +
        buyerName +
        " for your purchase! Your order is heading to " +
        buyerLocation
    );
  }
  function showPaymentForm() {
    setIsFormShown(true);
  }
  function saveBuyerLocation(e) {
    setBuyerLocation(e.target.value);
  }
  function saveBuyerName(e) {
    setBuyerName(e.target.value);
    console.log(buyerName);
  }
  function avoidSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="checkout">
      <div className="pay-btns">
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay $ {total} in laughs :D{<br></br>} ←
        </button>
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay ${total} in smiles :) {<br></br>} →
        </button>
      </div>
      <form
        onSubmit={avoidSubmit}
        className="payment-info"
        style={!isFormShown ? { display: "none" } : { display: "block" }}
      >
        <div className="payment-details">
          <span>Enter your name:</span>
          <input
            className="payment-name"
            placeholder="Name"
            onChange={saveBuyerName}
          ></input>
          <span>Location:</span>
          <input
            className="payment-location"
            placeholder="Location/city"
            onChange={saveBuyerLocation}
          ></input>
          <button
            className="place-order-btn"
            type="button"
            onClick={placeOrder}
          >
            Place order
          </button>
          <p
            className="thank-text"
            style={isOrderSent ? { display: "block" } : { display: "none" }}
          ></p>
        </div>
      </form>
    </section>
  );
}
