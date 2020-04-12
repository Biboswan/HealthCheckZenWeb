import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 8px;
  background-color: ${props => props.theme.color.primaryButton};
  padding: 12px 36px;
  color: ${props => props.theme.color.bg};
  border: 1px solid ${props => props.theme.color.borderDark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-center: center;
  min-width: 60px;
  min-height: 48px;
  text-align: center;

  &:hover {
    opacity: 0.85;
  }
`;

const ButtonPrimary = ({ onClick, children, ...rest }) => {
  return <ButtonStyled onClick={onClick} {...rest}>{children}</ButtonStyled>;
};

export default ButtonPrimary;
