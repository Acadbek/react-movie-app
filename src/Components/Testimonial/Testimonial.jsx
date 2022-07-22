import React from "react";
import Slider from "react-slick";
import { GlobalContainer } from "../../styles/GlobalStyle.styled";

import {
  CaruselCard,
  CaruselItem,
  CaruselWrapper,
  TestimonialContainer,
} from "./TestimonialStyle";

const Testimonial = () => {
  let caruselData = [
    {
      id: 1,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Otabek Abdulhamid",
      status: "Sayohatchilar",
    },
    {
      id: 2,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Temur Ismon",
      status: "Sayyoh",
    },
    {
      id: 3,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Nurbek Abdulhamid",
      status: "Sayohatchilar",
    },
    {
      id: 4,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarName: "Sanjar Ismon",
      status: "Sayohatchilar",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <section>
      <GlobalContainer>
        <TestimonialContainer>
          <h6>Sayohatchining guvohnomasi</h6>
          <h2>MIJOZLAR SHARXLARI</h2>
          <p>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
          <CaruselWrapper>
            <Slider {...settings}>
                {caruselData.map((val, id) => (
                  <CaruselItem>
                    <div className="rating_star">* * * * *</div>
                    <p>{val.paragraph}</p>
                    <div className="avatar_wrap">
                      <div className="avatar_img_div">
                        <img
                          src="http://www.xondoppitravel.com/admin/files/image/i%20(1).webp"
                          alt=""
                        />
                      </div>
                      <div className="avatar_name_div">
                        <h5>{val.avatarName}</h5>
                        <span>{val.status}</span>
                      </div>
                      <div></div>
                    </div>
                  </CaruselItem>
                ))}
            </Slider>
          </CaruselWrapper>
        </TestimonialContainer>
      </GlobalContainer>
    </section>
  );
};

export default Testimonial;
