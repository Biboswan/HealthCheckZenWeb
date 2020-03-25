import React from "react";
import styled from "styled-components";
import LoaderIcon from "../Icons/Loader";

const LoaderContainer = styled.div`
  align-items: center;
  justify-content: center;
  min-height: 50px;
  width: 80px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -25px;

  & div {
    width: 60px;
    height: auto;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <LoaderIcon />
      </div>
    </LoaderContainer>
  );
};

export default Loader;
