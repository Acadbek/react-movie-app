import React from "react";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";

const Contact = () => {
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>BIZ BILAN ALOQA</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <div className="bg-backgroundColor py-[95px]">
        <GlobalContainer>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-green">Biz bilan aloqa</p>
              <h1 className="text-[#fff] text-[30px] font-bold">
                BIZNING IJTIMOIY TARMOQLAR
              </h1>
              <p className="text-[#fff] font-semibold mt-5">
                admin velit wisi quibusdam pariatur, iusto primis, nec nemo,
                rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent. Eget feugiat error necessitatibus taciti..
              </p>
            </div>
            <div>as</div>
          </div>
        </GlobalContainer>
      </div>
    </>
  );
};

export default Contact;
