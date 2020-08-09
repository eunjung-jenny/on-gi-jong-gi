import React, { Component } from "react";
import ProfilePresenter from "./ProfilePresenter";
import userData from "../../data/user";

export default class extends Component {
  state = {
    user: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      let user;
      const a = new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve({
              user: {
                name: "정보통",
                totalSupportNum: 13,
                totalAmount: 320000,
                totalSupportOrganizations: 7,
                badges: ["A", "B"],
                paymentMethods: ["탭탭오"],
                myOrganizations: [
                  { id: 3, name: "Sanders-Russo" },
                  { id: 10, name: "Stephens-Thomas" },
                ],
                supportDetails: userData.result[2].order,
              },
            }),
          1000
        );
      });
      await a.then((res) => {
        user = res.user;
      });
      this.setState({ user });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;
    return <ProfilePresenter user={user} loading={loading} error={error} />;
  }
}
