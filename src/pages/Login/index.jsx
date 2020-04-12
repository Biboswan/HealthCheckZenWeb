import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import { loginUser } from "../../actions/account_action";
import FormAlternateSection from "../../components/FormAlternateSection";
import Toastbar from '../../components/Toastbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  color: ${props => props.theme.color.borderDark};
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;

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

let isFormSubmit = false;

const Login = props => {
  const [formValue, setFormValue] = useState({});
  const [formStatus, setFormStatus] = useState({});
  const [isShowLoginErrorToast, setIsShowLoginErrorToast] = useState(false);
  const { t } = useTranslation();
  const { loginDetails } = props;

  if (loginDetails && loginDetails.success) {
    props.history.push('/home');
  }

  useEffect(() => {
    if (loginDetails && !loginDetails.success && isFormSubmit) {
      setIsShowLoginErrorToast(true);
    }

  },[loginDetails]);

  const validation = (name, value) => {
    if (value) {
      if (value.length === 0) {
        return setFormStatus(formStatus => ({
          ...formStatus,
          [name]: { type: "error", message: t('emptyField') }
        }));
      }

      setFormStatus(formStatus => ({
        ...formStatus,
        [name]: { type: "success" }
      }));
    } else {
      setFormStatus(formStatus => ({
        ...formStatus,
        [name]: { type: "error", message: t('emptyField') }
      }));
    }
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
    isFormSubmit = true;
    props.loginUser(formValue);
  };

  return (
    <Container>
      <div>
        <form onChange={handleOnChange} onBlur={handleOnBlur}>
          <FieldsContainer>
            <section>
              <Label>{t('email')}</Label>
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
              <Label>{t('password')}</Label>
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
            <Button onClick={handleOnSubmit}>{t('login')}</Button>
          </SubmitSection>
        </form>
        <FormAlternateSection link="/signup" linkLabel={t('signup')} />
      </div>
      {isShowLoginErrorToast && <Toastbar
        message={t('wrongCred')}
        setIsToastOpen={setIsShowLoginErrorToast} />}
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
