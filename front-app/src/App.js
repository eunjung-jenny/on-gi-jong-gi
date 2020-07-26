import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact={true} render={() => <h1>Home</h1>} />
    </Router>
  );
}
