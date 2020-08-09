import React, { Component } from "react";
import OrganizationDetailPresenter from "./OrganizationDetailPresenter";
import facility from "../../data/facility";

export default class extends Component {
  state = {
    organization: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      let organization;
      const a = new Promise((resolve, reject) => {
        setTimeout(() => resolve(facility.result[1]), 1000);
      });
      await a.then((res) => (organization = res));
      this.setState({ organization });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { organization, loading, error } = this.state;
    return (
      <OrganizationDetailPresenter
        organization={organization}
        loading={loading}
        error={error}
      />
    );
  }
}
