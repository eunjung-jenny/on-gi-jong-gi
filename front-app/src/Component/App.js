import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Route/Home";
import Profile from "../Route/Profile";
import Item from "../Route/Item";
import Organizations from "../Route/Organizations";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route path="/" exact={true} component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/item" component={Item} />
          <Route path="/organizations" component={Organizations} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
