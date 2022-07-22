import React from "react";
import { GlobalContainer } from "../styles/GlobalStyle.styled";
import {
  ButtonInner,
  ButtonOuter,
  Header,
  HomeContainer,
  SliderImgWrapper,
  SwiperChild,
  WrapperBanner,
} from "./HomeStyle.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickImg from "../assets/photo/maldive.jpg";
import SlickImg2 from "../assets/photo/bg.jpg";
import SlickImg3 from "../assets/photo/packageSam.jpg";

const Home = () => {
  let swiperData = [
    {
      id: 1,
      title: "Mo'jizaviy Sohillar",
      paragraph:
        "  Kundalik tashvishlar va muammolardan charchagan yurak sayohatlar qilishni juda xoxlaydi. Uydan uzoqda bo’lgan yurtlarda o’tkazgan kunlar inson uchun hayotining unutilmas onlari bo’lib tarixga mixlanadi.",
      img: SlickImg,
    },
    {
      id: 2,
      title: "Saudiya Arabistoni Bo'ylab Sayohat",
      paragraph:
        "  Inson hayotga kelibdimi, uni mazmunli o’tkaza olishni ham bilishi kerak. Hayotingizning har bir daqiqasini qiziqarli va unutilmas o’tkazishga odatlaning.",
      img: SlickImg2,
    },
    {
      id: 3,
      title: "Samarqand shahri",
      paragraph:
        " Ehtimol, bu yangi kashf qilingan o’lka unga g’oyat ajoyib, aql-zakovatga boy va iqtisodiy tarafdan o’ta rivojlangan narsa tuyulishi mumkin, hattoki ayrimlar shunday o’lkalarga ko’chib o’tishni ham istaydilar.",
      img: SlickImg3,
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          top: "50%",
          left: "95%",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          position: "absolute",
          top: "50%",
          left: "5%",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <HomeContainer>
      <Header>
        <Slider {...settings}>
          {swiperData.map((val, inex) => (
            <SliderImgWrapper>
              <img src={val.img} alt="" />
              <div className="overLay"></div>
              <SwiperChild>
                <h1>{val.title}</h1>
                <p>{val.paragraph}</p>
                <div>
                  <ButtonInner>
                    <button>Chet elga sayohat</button>
                  </ButtonInner>
                  <ButtonOuter>
                    <button>Ichki sayohat</button>
                  </ButtonOuter>
                </div>
              </SwiperChild>
            </SliderImgWrapper>
          ))}
        </Slider>
      </Header>
    </HomeContainer>
  );
};

export default Home;
