import React, { Component } from "react";

const images = {
  show: "✅",
  hide: "❌",
};

export default class CopyCat extends Component {
  render() {
    const name = this.props.name;
    const inputValue = this.props.input;
    const textVisible = this.props.textVisible;
    const handleChange = this.props.handleChange;
    const handleClick = this.props.handleClick;
    return (
      <div>
        <h1>Copy Cat {name || "Cat"} </h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <h2 onClick={handleClick}>{textVisible ? images.show : images.hide}</h2>
        <p>{textVisible && inputValue}</p>
      </div>
    );
  }
}
