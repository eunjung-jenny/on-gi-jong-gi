import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

export default class extends Component {
  state = {
    test: "test",
    loading: true,
    error: null,
  };

  render() {
    const { test, loading, error } = this.state;
    return <HomePresenter test={test} loading={loading} error={error} />;
  }
}
