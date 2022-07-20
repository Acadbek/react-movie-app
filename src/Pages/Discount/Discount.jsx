import React from "react";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import PackageCard from "../../Components/package/Package";
import img from "../../assets/photo/sydney.jpg";

const Discount = () => {
  return (
    <div>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>CHEGIRMALAR</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <PackageCard
          background={img}
          package="Aloqa10%"
          day="8 day"
          location="Samarqand"
          title="TOUR TO SATORINI"
          desc="Malesuada incidunt excepturi proident quo eros? Id interd..."
          price="Price: 1,092 so'm or $0.1 $0.001"
        />
      </GlobalContainer>
    </div>
  );
};

export default Discount;
