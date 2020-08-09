import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import user from "../../data/user";
import reward from "../../data/reward";

export default class extends Component {
  state = {
    campaign: null,
    myOrganizations: null,
    cards: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      let campaign, myOrganizations, cards;
      const a = new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve({
              campaign: "COVID 19",
              myOrganizations: user.result[0].follow,
              cards: reward.result,
            }),
          1000
        );
      });
      await a.then((res) => {
        campaign = res.campaign;
        myOrganizations = res.myOrganizations;
        cards = res.cards;
      });
      this.setState({ campaign, myOrganizations, cards });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { campaign, myOrganizations, cards, loading, error } = this.state;
    return (
      <HomePresenter
        campaign={campaign}
        myOrganizations={myOrganizations}
        cards={cards}
        loading={loading}
        error={error}
      />
    );
  }
}
