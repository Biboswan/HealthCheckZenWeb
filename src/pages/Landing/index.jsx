import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.color.primaryText};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.brand};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextOr = styled.div`
  margin: 20px auto;
`;

const Landing = props => {
  const { history } = props;

  const goToLogin = () => {
    history.push("/login");
  };

  const goToSignup = () => {
    history.push("./signup");
  };

  return (
    <Container>
      <InnerContainer>
        <Button onClick={goToLogin}>Login</Button>
        <TextOr>Or</TextOr>
        <Button onClick={goToSignup}>Signup</Button>
      </InnerContainer>
    </Container>
  );
};

export default Landing;
