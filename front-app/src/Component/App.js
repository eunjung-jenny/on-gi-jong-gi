import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Route/Home";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route path="/" exact={true} component={Home} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
