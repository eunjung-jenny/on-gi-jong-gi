import React from "react";
import PropTypes from "prop-types";

const HomePresenter = ({ campaign, myOrganizations, cards, loading, error }) =>
  loading ? (
    <h1>로딩중</h1>
  ) : error ? (
    <h1>에러발생</h1>
  ) : (
    <h1>
      로딩끝 / {campaign} /{myOrganizations.map((organization) => organization)}{" "}
      /{cards}
    </h1>
  );

HomePresenter.propTypes = {
  campaign: PropTypes.string,
  myOrganizations: PropTypes.array,
  cards: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default HomePresenter;
