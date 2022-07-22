import styled from "styled-components";

export const DestinationRow = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const DestinationItem = styled.div`
  position: relative;
  width: 350px;
  min-height: 425px;
  border-radius: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const DestinationItemChild = styled.div`
  position: absolute;
  bottom: 20px;
  background-color: #fff;
  width: 90%;
  padding: 22px 20px;
  border-radius: 25px;
  margin: 20px;

  .rating_star {
    background: #3a78c9;
    border-radius: 25px;
    padding: 2px 12px;
    position: absolute;
    right: 24px;
    top: -12px;
    display: inline-block;
  }

  i {
    margin: 0 4px;
    color: yellow;
  }

  h3 {
    line-height: 1.2;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s;
    margin: 10px 0;
  }
  a:hover {
    color: #174b90;
  }
  p {
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-size: 15px;
    color: #626672;
    font-family: "Poppins", sans-serif;
  }
`;
