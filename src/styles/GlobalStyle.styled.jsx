import styled from "styled-components";

export const GlobalStyle = styled.div``;

export const GlobalContainer = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const WrapperNavbar = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  z-index: 999;
`;

export const TopNavbar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid rgba(167, 167, 167, 0.25);
  padding: 10px 0;
`;

export const BottomNavbar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 99;
`;

export const InnerAndOuterContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 129.837px;
  background-image: url("	http://www.xondoppitravel.com/admin/files/ipeBoc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font-size: 60px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 0;
    color: #fff;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 425px;
  padding-top: 80px;
  background-color: #263a49;
  z-index: 99 !important;
  border-top: 1px solid #565050;
`;

export const TextWrap = styled.div`
margin:50px 0 ;
  text-align: center;
  h6 {
    color: #3a78c9;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 800;
    margin: 0 0 15px;
    line-height: 1.2;
    color: #223645;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #626672;
    max-width: 750px;
    margin: 0 auto;
  }
`;
