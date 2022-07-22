import React from "react";
import Package from "../../Components/package/Package";
import SecondCard from "../../Components/SecondCard";
import {
  GlobalContainer,
  InnerAndOuterContainer,
} from "../../styles/GlobalStyle.styled";
import img from "../../assets/photo/sma.jpg";
import img2 from "../../assets/photo/card.jpg";

const InnerTurizm = () => {
  const data = [
    {
      img: img,
      title: "Samarqand qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "10 kun",
      location: "Samarqand",
      price: "10 890 000 so'm ",
      forHowMany: "Har biriga",
    },
    {
      img: img2,
      title: "Farg'na qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "20 kun",
      location: "Farg'ona",
      price: "20 890 000 so'm ",
      forHowMany: "Har biriga",
    },
    {
      img: img,
      title: "Buhoro qadimiy joylardan biri",
      description: " Oʻzbekiston Respublikasidagi qadimiy shahar.",
      day: "10 kun",
      location: "Buhoro",
      price: "10 890 000 so'm ",
      forHowMany: "Har biriga",
    },
  ];

  return (
    <>
      <InnerAndOuterContainer>
        <GlobalContainer>
          <h1>TUR PAKETLAR</h1>
        </GlobalContainer>
      </InnerAndOuterContainer>
      <GlobalContainer>
        <div className="py-[95px]">
          {data.map((item) => (
            <SecondCard
              img={item.img}
              title={item.title}
              description={item.description}
              day={item.day}
              location={item.location}
              price={item.price}
              forHowMany={item.forHowMany}
            />
          ))}
        </div>
      </GlobalContainer>
    </>
  );
};

export default InnerTurizm;
