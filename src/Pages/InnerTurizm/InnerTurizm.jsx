import React from "react";
import Package from "../../Components/Package/Package";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";

const InnerTurizm = () => {
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>TUR PAKETLAR</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
      </GlobalContainer>
    </>
  );
};

export default InnerTurizm;
