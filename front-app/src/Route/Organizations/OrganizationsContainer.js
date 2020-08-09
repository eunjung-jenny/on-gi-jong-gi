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
        setTimeout(() => resolve(facility), 1000)
      );

      // const a = new Promise((resolve, reject) => {
      //   setTimeout(
      //     () =>
      //       resolve({
      //         organizations: [
      //           {
      //             name: "A",
      //             address: "서울시 광진구",
      //             type: "아동양육시설",
      //             liked: 137,
      //           },
      //           {
      //             name: "B",
      //             address: "서울시 동대문구",
      //             type: "양로원",
      //             liked: 87,
      //           },
      //         ],
      //       }),
      //     1000
      //   );
      // });
      await a.then((res) => {
        organizations = res.result;
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
