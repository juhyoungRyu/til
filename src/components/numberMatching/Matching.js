import React, { Component } from "react";

let obj1 = [];

class Matching extends Component {
  state = {
    num1: [],
    num2: 0,
  };

  randomNum = () => {
    if (this.state.num1.length === 8) {
      this.setState({
        num1: [0],
      });
    }
    for (let i = 0; i <= 8; i++) {
      obj1.push(Math.floor(Math.random() * 10));
    }
  };

  numInput = () => {
    this.randomNum();
    this.setState({
      num1: obj1,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.num1}</p>
        <button onClick={this.numInput}>start</button>
      </div>
    );
  }
}

export default Matching;
