import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  z-index: -5;
`;

export const SliderImgWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(197, 19, 19, 0.6),
    rgba(236, 26, 26, 0.61)
  );
  img {
    width: 100vw;
    height: 100vh;
  }
`;
export const SwiperChild = styled.div`
  left: 50%;
  position: absolute;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 999;
  h1 {
    color: #fff;
    font-size: 70px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    color: #ffffff;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-weight: 500;
  }
`;

export const ButtonInner = styled.button`
  button {
    background-color: #3a78c9;
    border: none;
    color: #ffffff;
    display: inline-block;
    font-size: 16px;
    line-height: 1.1;
    padding: 17px 30px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    border-radius: 25px;
    text-transform: uppercase;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #174b90;
  }
`;
export const ButtonOuter = styled.button`
  button {
    margin: 10px;
    border-radius: 25px;
    padding: 15px 30px;
    border: 2px solid #fff;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
  }

  button:hover {
    border-color: #174b90;
    background: #174b90;
  }
`;
