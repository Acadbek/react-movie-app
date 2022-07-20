import React from "react";
import { Link } from "react-router-dom";
import {
  BottomNavbar,
  GlobalContainer,
  TopNavbar,
  WrapperNavbar,
} from "../styles/GlobalStyle.styled";
import { WrapperBottomNavbar } from "../styles/NavbarStyle.styled";

const Navbar = () => {
  return (
    <WrapperNavbar>
      <TopNavbar>
        <GlobalContainer>Top of navbar</GlobalContainer>
      </TopNavbar>
      <BottomNavbar>
        <GlobalContainer>
          <WrapperBottomNavbar>
            <Link to="/">Home</Link>
            <Link to="/innerTurizm">Ichki turizm</Link>
            <Link to="/outerTurizm">Tashqi turizm</Link>
            <Link to="/discount">Chegirma</Link>
            <Link to="/contact">Contact</Link>
          </WrapperBottomNavbar>
        </GlobalContainer>
      </BottomNavbar>
    </WrapperNavbar>
  );
};

export default Navbar;
