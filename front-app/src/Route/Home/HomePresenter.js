import React from "react";

export default ({ campaign, myOrganizations, cards, loading, error }) =>
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
