import styled from "styled-components";

export const UpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .row {
    width: 259px;
    color: #e0e0e0;
  }
  .footer_logo {
    width: 241px;
    height: 55px;
  }

  .textwidget p {
    font-size: 15px;
    margin: 15px 0;
  }

  .widget .ul_items {
    font-size: 16px;
    margin: 20px 0;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }
  .widget .ul_items li:hover {
    transition: all 0.3s ease;
    color: #174b90;
  }
  .widget ul {
    font-size: 15px;
    margin: 20px 0;
    font-family: "Montserrat", sans-serif;
  }

  .widget ul li {
    margin: 10px 0;
  }

  .footer_bottom_line .line {
    margin-top: 10px;
    width: 60px;
    height: 2px;
    background-color: #3a78c9;
  }

  .widget ul li .phoneNum:hover {
    transition: all 0.3s ease;
    color: #174b90;
  }
`;
