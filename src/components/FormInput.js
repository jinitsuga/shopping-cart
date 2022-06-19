import React from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const [focus, setFocus] = React.useState(false);
  const { errorMessage, label, id, onChange, ...inputProps } = props;
  // function to trigger on blur, showing error message. Need focused state boolean to handle.
  function handleFocus(e) {
    setFocus(true);
  }
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        className="checkout-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
      ></input>
      <span className="error-msg">{props.errorMessage}</span>
    </div>
  );
}
