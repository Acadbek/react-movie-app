import styled from "styled-components";

export const CaruselWrapper = styled.div``;

export const CaruselDiv = styled.div`
  width: 380px;
  height: 425px;
`;

export const CaruselItem = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 17px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  .paragraphDiv {
    position: absolute;
    top: 74%;
    left: 0;
    background-color: #fff;
    border-radius: 25px;
    margin: 20px;
    padding: 22px 20px;
    line-height: 1.6;
    font-size: 15px;
    color: #626672
  }
`;
