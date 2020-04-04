import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 85vh;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.primaryText};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextOr = styled.div`
  margin: 20px auto;
  color: ${props => props.theme.color.secondaryText};
`;

const Landing = props => {
  const { t } = useTranslation();
  const { history, loginDetails } = props;

  if (loginDetails && loginDetails.success === true) {
    props.history.push('/home');
  }

  const goToLogin = () => {
    history.push("/login");
  };

  const goToSignup = () => {
    history.push("./signup");
  };

  return (
    <Container>
      <InnerContainer>
        <Logo size='300px' />
        <Button onClick={goToLogin}>{t('login')}</Button>
        <TextOr>{t('or')}</TextOr>
        <Button onClick={goToSignup}>{t('signup')}</Button>
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loginDetails: state.accountReducer.loginDetails
  };
};

export default connect(
  mapStateToProps,
  null
)(Landing);
