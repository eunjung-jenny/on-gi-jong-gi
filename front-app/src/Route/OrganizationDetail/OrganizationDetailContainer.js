import React, { Component } from "react";
import OrganizationDetailPresenter from "./OrganizationDetailPresenter";

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
        setTimeout(
          () =>
            resolve({
              organization: {
                name: "A",
                address: "서울시 광진구",
                type: "아동양육시설",
                liked: 137,
                message: "늘 사랑을 나눠주셔서 감사합니다.",
              },
            }),
          1000
        );
      });
      await a.then((res) => (organization = res.organization));
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
