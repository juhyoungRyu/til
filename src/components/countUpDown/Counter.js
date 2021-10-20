import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    number: 0,
    age: 0,
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Counter</h1>
        <div>value : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </Fragment>
    );
  }
}

export default Counter;
