import React from "react";
import "./Checkout.css";
import FormInput from "./FormInput";
export default function Checkout(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);

  const [buyerInfo, setBuyerInfo] = React.useState({
    name: "",
    country: "",
    location: "",
  });
  function handleInput(e) {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
    console.log(buyerInfo);
  }
  // array with the inputs props to map over and create the form.
  // Easier and cleaner to validate this way.
  const inputsData = [
    {
      key: 1,
      name: "name",
      label: "Name",
      placeholder: "Your name",
      type: "text",
      required: true,
      errorMessage: "Name should be at least 3 and up to 14 characters",
      pattern: "^[A-Za-z0-9]{3,14}$",
    },
    {
      key: 2,
      name: "country",
      label: "Country",
      placeholder: "Select your country",
      type: "text",
      required: true,
      errorMessage: "Choose an existing country",
      pattern: "^[A-Za-z0-9]{3,14}$",
    },
    {
      key: 3,
      name: "location",
      label: "Location",
      placeholder: "Location/City",
      type: "text",
      required: true,
      errorMessage: "City should be at least 2 and up to 16 characters",
      pattern: "^[A-Za-z0-9]{2,16}$",
    },
  ];
  const inputs = inputsData.map((input) => {
    return <FormInput id={input.key} {...input} onChange={handleInput} />;
  });

  const cart = props.cart;
  const total = Math.floor(
    cart.reduce(function (previous, current) {
      return previous + current.price * current.quantity;
    }, 0)
  );

  function placeOrder() {
    props.resetCart();
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
        {inputs}
      </form>
    </section>
  );
}
