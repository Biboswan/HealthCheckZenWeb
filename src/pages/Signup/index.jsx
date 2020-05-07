import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import Toastbar from '../../components/Toastbar'; 
import FormAlternateSection from "../../components/FormAlternateSection";
import { signup } from '../../api/auth';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  color: ${props => props.theme.color.primaryText};
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

const Signup = props => {
    const [formValue, setFormValue] = useState({});
    const [formStatus, setFormStatus] = useState({});
    const [ formSubmitStatus, setFormSubmitStatus] = useState(null);
    const [isShowFormSubmitErrorToast, setIsShowFormSubmitErrorToast] = useState(false);
    const { t } = useTranslation();

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
  
    const handleOnSubmit = async e => {
      e.preventDefault();
      try {
        const { email, password, age } = formValue;
        await signup({ email_id: email, password, age: Number(age) });
        setFormSubmitStatus({ status :"success", message: "Check verification link in the email !" });
      } catch (err) {
        setFormSubmitStatus({ status :"error" , message: err.response.data.error });
        setIsShowFormSubmitErrorToast(true);
      }
    };
  
    return (
      <Container>
        <div>
          {formSubmitStatus && formSubmitStatus.status === "success" ? <h2>{formSubmitStatus.message}</h2> :
          (<form onChange={handleOnChange} onBlur={handleOnBlur}>
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
              <section>
                <Label>{t('age')}</Label>
                <br />
                <AccountInputField
                  type="number"
                  name="age"
                  value={formValue["age"] || ""}
                  required={true}
                  status={formStatus["age"]}
                />
              </section>
            </FieldsContainer>
            <SubmitSection>
              <Button onClick={handleOnSubmit}>{t('signup')}</Button>
            </SubmitSection>
          </form>)}
          <FormAlternateSection link="/login" linkLabel={t('login')} />
          {isShowFormSubmitErrorToast && formSubmitStatus.status === "error" && <Toastbar
            message={formSubmitStatus.message}
            setIsToastOpen={setIsShowFormSubmitErrorToast} />}
        </div>
      </Container>
    );
  };
  

export default Signup;
