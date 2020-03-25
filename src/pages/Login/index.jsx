import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import { loginUser } from "../../actions/account_action";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.color.primaryText};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.brand};

  & div {
    max-width: 425px;
    width: 100%;
  }
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;

const SubmitSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
`;

const AccountInputField = styled(InputField)`
  width: 100%;
  margin-top: 6px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Login = props => {
  const [formValue, setFormValue] = useState({});
  const [formStatus, setFormStatus] = useState({});
  const { loginDetails } = props;

  if (loginDetails && loginDetails.success === true) {
    props.history.push('/home');
  }

  const validation = (name, value) => {
    if (value.length === 0) {
      return setFormStatus(formStatus => ({
        ...formStatus,
        [name]: { type: "error", message: "Empty Field!" }
      }));
    }

    setFormStatus(formStatus => ({
      ...formStatus,
      [name]: { type: "success" }
    }));
  };

  const handleOnChange = e => {
    const { name, value } = e.target;

    setFormValue(formValue => ({ ...formValue, [name]: value }));
    validation(name, value);
  };

  const handleOnBlur = e => {
    const { name, value } = e.target;

    validation(name, value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    props.loginUser(formValue);
  };

  return (
    <Container>
      <div>
        <form onChange={handleOnChange} onBlur={handleOnBlur}>
          <FieldsContainer>
            <section>
              <Label>Email</Label>
              <br />
              <AccountInputField
                type="email"
                name="email"
                value={formValue["email"] || ""}
                required={true}
                status={formStatus["email"]}
              />
            </section>
            <section>
              <Label>Password</Label>
              <br />
              <AccountInputField
                type="password"
                name="password"
                value={formValue["password"] || ""}
                required={true}
                status={formStatus["password"]}
              />
            </section>
          </FieldsContainer>
          <SubmitSection>
            <Button onClick={handleOnSubmit}>Login</Button>
          </SubmitSection>
        </form>
      </div>
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
  { loginUser }
)(Login);
