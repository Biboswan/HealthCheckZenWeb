import React, { Fragment } from "react";
import styled from "styled-components";
import Error from "../Icons/Error";
import RightTick from "../Icons/RightTick";

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  padding-right: 0.75em;
  border-radius: 2px;
  border: solid 1px ${props => props.theme.color.borderDark};
  &:focus-within {
    outline: none;
    border-color: ${props =>
      props.isError ? props.theme.color.error : props.theme.color.brand};
    box-shadow: 0 0 8px 0
      ${props =>
        props.isError ? props.theme.color.error : props.theme.color.brand};
  }

  &:focus {
    border: solid 1px ${props => props.theme.color.borderLight};
    box-shadow: none;
  }

  background-position: right center;

  .iconAlignMiddle {
    align-self: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0.75em 0 0.75em 0.75em;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.color.error};
`;

const dummyHandler = () => {};

const InputFormField = ({ disabled, type, status, ...rest }) => {
  return (
    <Fragment>
      <InputContainer
        tabIndex={0}
        isError={!!status && status.type === "error"}
      >
        <Input type={type} {...rest} onChange={dummyHandler} />
        {!!status &&
          (status.type === "success" ? (
            <RightTick className="iconAlignMiddle" />
          ) : (
            <Error className="iconAlignMiddle" />
          ))}
      </InputContainer>
      {status && status.type === "error" && (
        <ErrorMessage>{status.message}</ErrorMessage>
      )}
    </Fragment>
  );
};

export default InputFormField;
