import React from "react";
import "./Checkout.css";
export default function Checkout(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);

  const [buyerInfo, setBuyerInfo] = React.useState({
    name: "",
    country: "",
    location: "",
  });
  const cart = props.cart;
  const total = Math.floor(
    cart.reduce(function (previous, current) {
      return previous + current.price * current.quantity;
    }, 0)
  );
  // need to send total price and resetCart from props
  // FORM VALIDATION PENDING
  function keepBrowsing() {}
  function placeOrder() {
    props.resetCart();
    setIsOrderSent(true);
  }
  function showPaymentForm() {
    setIsFormShown(true);
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
        style={!isFormShown ? { display: "none" } : { display: "flex" }}
      >
        <div
          className="payment-details"
          style={
            isOrderSent
              ? { display: "none" }
              : { display: "block", display: "flex", flexDirection: "column" }
          }
        >
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
        </div>
        <p
          className="thank-text"
          style={isOrderSent ? { display: "block" } : { display: "none" }}
        >
          Thank you {buyerName} for your purchase! Your order is on the way to{" "}
          {buyerLocation}. It should be there in about 69 hours.
        </p>
      </form>
    </section>
  );
}
