import React, { Component } from "react";
import CopyCat from "./components/copyCat";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      textVisible: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    // console.log(e);
    this.setState({
      input: e.target.value,
    });
  }

  handleClick() {
    this.setState({ textVisible: !this.state.textVisible });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <CopyCat
          name="Abdulla"
          input={this.state.input}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          textVisible={this.state.textVisible}
        />
      </div>
    );
  }
}
