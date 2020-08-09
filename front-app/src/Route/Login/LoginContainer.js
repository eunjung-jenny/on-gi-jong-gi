import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends Component {
  state = {
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, error } = this.state;
    return <LoginPresenter loading={loading} error={error} />;
  }
}
