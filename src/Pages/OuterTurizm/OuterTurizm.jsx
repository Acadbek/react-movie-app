import React from "react";
import Destination from "../../Components/Destination/Destination";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";

const OuterTurizm = () => {
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>MAQSAD</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <Destination />
      </GlobalContainer>
    </>
  );
};

export default OuterTurizm;
