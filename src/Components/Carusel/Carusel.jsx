import React, { Component } from "react";
import Slider from "react-slick";
import { CaruselDiv, CaruselItem, CaruselWrapper } from "./CaruselStyle";

export default class Carusel extends Component {
  render() {
    let caruselData = [
      {
        id: 1,
        paragraph: "Misr Hush manzara joylardan biri",
        imgCausel: "http://www.xondoppitravel.com/admin/files/63beach.jpg",
      },
      {
        id: 2,
        paragraph: "Dubai Hush manzara joylardan biri",
        imgCausel: "http://www.xondoppitravel.com/admin/files/i.jpg",
      },
      {
        id: 3,
        paragraph: "Misr Hush manzara joylardan biri",
        imgCausel:
          "http://www.xondoppitravel.com/admin/files/banner-img1.jpg        ",
      },
      {
        id: 4,
        paragraph: "Misr Hush manzara joylardan biri",
        imgCausel: "	http://www.xondoppitravel.com/admin/files/ipeBoc.jpg",
      },
    ];
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <CaruselWrapper>
        <Slider {...settings}>
          {caruselData.map((val, id) => (
            <CaruselDiv key={id}>
              <CaruselItem>
                <img src={val.imgCausel} alt="" />
                <div className="paragraphDiv">
                  <p>{val.paragraph}</p>
                </div>
              </CaruselItem>
            </CaruselDiv>
          ))}
        </Slider>
      </CaruselWrapper>
    );
  }
}
