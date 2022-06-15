import React from "react";
import "./Checkout.css";
export default function Checkout(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);
  const [buyerName, setBuyerName] = React.useState("");
  // need to send total price and resetCart from props
  function payTotal() {}
  function showPaymentForm() {
    setIsFormShown(true);
  }
  function saveBuyerName(e) {
    setBuyerName(e.event.target.value);
    console.log(buyerName);
  }
  return (
    <section className="checkout">
      <div className="pay-btns">
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay ${props.total} in laughs
        </button>
        <button
          type="button"
          style={!isFormShown ? { display: "block" } : { display: "none" }}
          onClick={showPaymentForm}
        >
          Pay ${props.total} in smiles
        </button>
      </div>
      <form
        className="payment-info"
        style={!isFormShown ? { display: "none" } : { display: "block" }}
      >
        <input
          className="payment-name"
          placeholder="Name"
          onChange={saveBuyerName}
        ></input>
      </form>
    </section>
  );
}
