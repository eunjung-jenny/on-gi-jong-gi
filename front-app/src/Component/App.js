import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../Home";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route path="/" exact={true} component={Home} />
        </Router>
      </>
    );
  }
}

export default App;
