import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Close from "../Icons/Close";

const ToastOuterContainer = styled.div`
  position: fixed;
  top: 2px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const ToastbarContainer = styled.div`
  border-radius: 6px;
  background-color: #414146;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToastMessage = styled.p`
  max-width: 54ch;
  margin-right: 10px;
  color: #fff;
`;

const Toastbar = props => {
  const { message, setIsToastOpen } = props;
  return ReactDOM.createPortal(
    <ToastOuterContainer>
      <ToastbarContainer>
        <ToastMessage>{message}</ToastMessage>
        <Close onClick={() => setIsToastOpen(false)} />
      </ToastbarContainer>
    </ToastOuterContainer>,
    document.querySelector("#toastbar")
  );
};

Toastbar.propTypes = {
  message: PropTypes.node.isRequired,
  setIsToastOpen: PropTypes.func.isRequired
};

export default Toastbar;
