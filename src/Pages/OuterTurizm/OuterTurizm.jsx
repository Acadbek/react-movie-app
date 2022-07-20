import React from "react";
import Destination from "../../Components/Destination/Destination";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import background from "../../assets/photo/card.jpg";
import background2 from "../../assets/photo/bg.jpg";
import background3 from "../../assets/photo/maldive.jpg";
import background4 from "../../assets/photo/packageSam.jpg";
import background5 from "../../assets/photo/sma.jpg";

const OuterTurizm = () => {
  const array = [
    {
      img: background,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background2,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background3,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background4,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background5,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
    {
      img: background,
      location: "gavayi orollari",
      title: "dengiz bo'ylari va manzaralari",
    },
  ];
  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>MAQSAD</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 my-[95px]">
          {array.map((item) => (
            <Destination
              background={item.img}
              location={item.location}
              title={item.title}
            />
          ))}
        </div>
      </GlobalContainer>
    </>
  );
};

export default OuterTurizm;
