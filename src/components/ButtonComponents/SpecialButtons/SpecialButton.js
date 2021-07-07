import React from "react";
import Specials from "./Specials"
const SpecialButton = (props) => {
  return (
    <button className="sBBtn" onClick={() => props.clear(props.text)}>
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton;