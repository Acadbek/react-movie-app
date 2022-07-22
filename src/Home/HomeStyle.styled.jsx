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
