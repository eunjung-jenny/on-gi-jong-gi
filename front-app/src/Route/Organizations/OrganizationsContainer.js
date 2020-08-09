import React, { Component } from "react";
import OrganizationsPresenter from "./OrganizationsPresenter";
import facility from "../../data/facility";

export default class extends Component {
  state = {
    organizations: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      let organizations;
      const a = new Promise((resolve, reject) =>
        setTimeout(() => resolve(facility.result), 1000)
      );
      await a.then((res) => {
        organizations = res;
      });
      this.setState({ organizations });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { organizations, loading, error } = this.state;
    return (
      <OrganizationsPresenter
        organizations={organizations}
        loading={loading}
        error={error}
      />
    );
  }
}
