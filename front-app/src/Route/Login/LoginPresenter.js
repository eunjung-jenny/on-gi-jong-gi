import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../../Component/Footer";

const Container = styled.main`
  height: 90vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Title = styled.h2``;

const KakaoLoginButton = styled.div`
  background-color: #fdda09;
  width: 60vw;
  text-align: center;
  padding: 5px 0;
  color: white;
  border-radius: 20px;
  font-weight: 600;
`;

const SignupButton = styled.div`
  margin-top: 5px;
  background-color: #0ca678;
  width: 60vw;
  text-align: center;
  padding: 5px 0;
  color: white;
  border-radius: 20px;
  font-weight: 600;
`;

const LookaroundButton = styled.div`
  margin-top: 5px;
  width: 60vw;
  text-align: center;
  padding: 5px 0;
  color: #0ca678;
  border-radius: 20px;
  font-weight: 600;
`;

const LoginPresenter = ({ loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Title>푸므로</Title>
        <Section>
          <KakaoLoginButton>카카오 아이디로 로그인</KakaoLoginButton>
          <SignupButton>이메일로 가입하기</SignupButton>
          <LookaroundButton>둘러보기</LookaroundButton>
        </Section>
        <Footer />
      </>
    )}
  </Container>
);

LoginPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default LoginPresenter;
