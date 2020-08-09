import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../Route/Home";
import Login from "../Route/Login";
import Profile from "../Route/Profile";
import Item from "../Route/Item";
import Organizations from "../Route/Organizations";
import OrganizationDetail from "../Route/OrganizationDetail";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/item/:id" component={Item} />
          <Route path="/organizations" exact={true} component={Organizations} />
          <Route path="/organizations/:id" component={OrganizationDetail} />
        </Router>
      </>
    );
  }
}

export default App;
