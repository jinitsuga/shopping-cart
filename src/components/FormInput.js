import React from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const { errorMessage, label, id, onChange, ...inputProps } = props;
  // function to trigger on blur, showing error message. Need focused state boolean to handle.
  function handleFocus(e) {}
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus}></input>
      <span className="error-msg">{props.errorMessage}</span>
    </div>
  );
}
