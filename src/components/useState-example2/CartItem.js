import React from "react";

function CartItem(props) {
  const appleCounter = props.appleCounter;
  return (
    <div>
      <label>{props.itemName}</label>
      <input type="text" value={appleCounter} id="item1" />
      <a href="!#" ref="item1" onClick={props.addHandleClick}>
        +
      </a>
      <a href="!#" ref="item1" onClick={props.minHandleClick}>
        -
      </a>
    </div>
  );
}

export default CartItem;
