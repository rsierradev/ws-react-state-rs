import React from "react";

function CopyCat(props) {
  const images = {
    show: "✅",
    hide: "❌",
  };
  return (
    <div>
      Functional Component
      <input type="text" value={props.input} onChange={props.handleChange} />
      <div onClick={props.handleClick}>
        {props.textVisible ? images.show : images.hide}
      </div>
      <p>{props.textVisible && props.input}</p>
    </div>
  );
}

export default CopyCat;
