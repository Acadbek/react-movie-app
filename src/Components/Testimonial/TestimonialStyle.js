import styled from "styled-components";

export const TestimonialContainer = styled.div`

`;

export const CaruselWrapper = styled.div`
  text-align: left;
  margin: 50px 0;
`;

export const CaruselCard = styled.div``;

export const CaruselItem = styled.div`
  width: 370px;
  height: 270px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 5%);

  .rating_star ul {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .rating_star ul li {
    color: #fde16d;
  }

  .avatar_wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .avatar_img_div img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 15px;
    color: #626672;
    line-height: 1.6;
    margin: 0 0 15px;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 1.1;
    font-weight: 600;
    color: #223645;
  }

  span {
    font-size: 13px;
    text-transform: uppercase;
    line-height: 1;
    display: block;
    color: #3a78c9;
  }
`;

export const Quote = styled.div`
  font-size: 50px;
  color: #f9f9f9;
`;
