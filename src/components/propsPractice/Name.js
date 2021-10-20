import React, { Component, Fragment } from "react";

class Name extends Component {
  render() {
    return (
      <Fragment>
        <h3> 안녕하세요 제 이름은 {this.props.name}입니다.</h3>
      </Fragment>
    );
  }
}

export default Name;
