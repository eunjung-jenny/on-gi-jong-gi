import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AccountDetail from "../../Component/AccountDetail";
import SupportDetail from "../../Component/SupportDetail";
import MyOrg from "../../Component/Org";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  color: black;
  padding-bottom: 5vh;
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

const Payments = styled.div`
  display: flex;
`;

const Payment = styled.div`
  background-color: #20c997;
  color: white;
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
            {user.paymentMethods.map((method, idx) => (
              <Payment key={idx}>{method}</Payment>
            ))}
          </Payments>
        </Section>
        <Section>
          <Title>즐겨찾는 기관</Title>
          <MyOrgs>
            {user.myOrganizations.map((org, idx) => (
              <MyOrg key={idx} org={org} />
            ))}
          </MyOrgs>
        </Section>
        <Section>
          <Title>후원 내역</Title>
          {user.supportDetails.map((supportDetail, idx) => (
            <SupportDetail key={idx} supportDetail={supportDetail} />
          ))}
        </Section>
        <Footer />
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
