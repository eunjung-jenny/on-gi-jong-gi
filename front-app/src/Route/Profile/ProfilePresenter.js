import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AccountDetail from "../../Component/AccountDetail";
import SupportDetail from "../../Component/SupportDetail";

const Container = styled.main`
  margin: 10px 20px;
  border: 1px solid black;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Title = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 5px;
`;

const MyOrgs = styled.div`
  display: flex;
`;

const MyOrg = styled.article`
  width: 10vw;
  height: 10vw;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 5px;
`;

const Payments = styled.div`
  display: flex;
`;

const Payment = styled.div`
  background-color: grey;
  width: 25vw;
  height: 10vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const MySupports = styled.div``;

const ProfilePresenter = ({ user, loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Section>
          <Title>내 계정</Title>
          <AccountDetail
            name={user.name}
            totalSupportNum={user.totalSupportNum}
            totalAmount={user.totalAmount}
            totalSupportOrganizations={user.totalSupportOrganizations}
            badges={user.badges}
          />
        </Section>
        <Section>
          <Title>내 결제수단</Title>
          <Payments>
            {user.paymentMethods.map((method) => (
              <Payment>{method}</Payment>
            ))}
          </Payments>
        </Section>
        <Section>
          <Title>즐겨찾는 기관</Title>
          <MyOrgs>
            {user.myOrganizations.map((org, idx) => (
              <MyOrg key={idx}>{org}</MyOrg>
            ))}
          </MyOrgs>
        </Section>
        <Section>
          <Title>후원 내역</Title>
          {user.supportDetails.map((supportDetail, idx) => (
            <SupportDetail key={idx} supportDetail={supportDetail} />
          ))}
        </Section>
      </>
    )}
  </Container>
);

ProfilePresenter.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default ProfilePresenter;
