import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const SliderImgWrapper = styled.div`
  position: relative;
  img {
    width: 100vw;
    height: 100vh;
  }

  .overLay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
export const SwiperChild = styled.div`
  left: 50%;
  position: absolute;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;

  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .secondBtn {
    border: 2px solid #fff;
    transition: background-color 0.3s, border-color 0.3s;
    background-color: transparent;
  }

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

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const BlogSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 70px 0;
`;

export const BlogImgWrap = styled.div`
  position: relative;

  .blogImgOver {
    width: 315px;
    position: absolute;
    top: 18%;
    right: -15%;
    padding: 20px 40px;
    border-radius: 25px;
    background-color: #3a78c9;
  }

  .imgOverText {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 0;
    color: #ffffff;
    line-height: 1.3;
  }

  img {
    border-radius: 25px;
    margin-bottom: 50px;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    margin: 0 0 15px;
    line-height: 1.2;
    color: #223645;
  }

  p {
    font-size: 15px;
    color: #626672;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
  }
`;

export const ClientBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 5%);
  border-radius: 25px;
  padding: 25px;
  margin-top: 50px;
  background-color: #ffffff;
  .brandImgDiv {
    margin:0 10px;
  }
  .brandImgDiv img {
    margin:0 ;
  }
`;

export const LeftSight = styled.div`
  flex: 5;
`;

export const RightSightContainer = styled.div`
  padding: 0 50px;
  margin: 20px 0;

  .icon_box {
    text-align: center;
  }

  .icon {
    width: 100px;
    height: 100px;
    background-color: #00a795;
    padding: 25px;
    border-radius: 50%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 20px;
  }

  h3 {
    color: #223645;
    margin: 0 0 15px;
    line-height: 1.2;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
    color: #626672;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
  }
`;
export const RightSight = styled.div`
  float: right;
  width: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  flex: 3;
`;
