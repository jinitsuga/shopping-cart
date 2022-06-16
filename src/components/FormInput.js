import React from "react";

export default function FormInput(props) {
  // function to trigger on blur, showing error message. Need focused state boolean to handle.
  function handleFocus(e) {}
  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={props.onChange}
        onBlur={handleFocus}
      ></input>
      <span>{props.errorMessage}</span>
    </div>
  );
}
