import React, { Component, Fragment } from "react";
import Name from "./components/Name";

class App extends Component {
  render() {
    let name = "주형";
    return (
      <Fragment>
        <Name name={name} />
      </Fragment>
    );
  }
}

export default App;
