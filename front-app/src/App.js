import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home} />
      </Router>
    );
  }
}

export default App;
