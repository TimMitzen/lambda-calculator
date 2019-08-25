import React from "react";
import Specials from "./Specials"
const SpecialButton = (props) => {
  return (
    <button className="spButton" onClick={() => props.clear(props.textadd)}>
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton;