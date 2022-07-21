import React from "react";
import { Link } from "react-router-dom";
import DropDowner from "../Components/DropDown/DropDown";
import {
  BottomNavbar,
  GlobalContainer,
  TopNavbar,
  WrapperNavbar,
} from "../styles/GlobalStyle.styled";
import {
  Button,
  NavbarLisItems,
  SocialMediaIcons,
  WrapperBottomNavbar,
  WrapperTopNavbar,
} from "../styles/NavbarStyle.styled";

const Navbar = () => {
  return (
    <WrapperNavbar>
      <TopNavbar>
        <GlobalContainer>
          <WrapperTopNavbar>
            <a href="tel:+998-90-531-34-13" className="navbarPhone">
              <span className="navbarPhoneIcon">P</span>
              <div className="navbarPhoneDiv">
                <p>Telefon Raqam:</p>
                <p>+998-90-531-34-13</p>
              </div>
            </a>
            <div className="navbarLogo">
              <Link to="/">
                <img
                  src="http://xondoppitravel.com/admin/files/keraklisi.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="navbarWorkTime">
              <div className="navbarPhone">
                <div className="navbarTimeDiv">
                  <p>Ish Vaqti</p>
                  <p>8:00-20:00</p>
                </div>
                <span className="navbarPhoneIcon">P</span>
              </div>
            </div>
          </WrapperTopNavbar>
        </GlobalContainer>
      </TopNavbar>
      <BottomNavbar>
        <GlobalContainer>
          <WrapperBottomNavbar>
            <SocialMediaIcons>
              <ul>
                <li>
                  <a href="#">
                    <i>O</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>O</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>O</i>
                  </a>
                </li>
              </ul>
            </SocialMediaIcons>
            <NavbarLisItems>
              <ul>
                <li>
                  <Link to="/">BOSH SAHIFA</Link>
                </li>
                <li>
                  <Link to="/outerTurizm">TASHQI TURIZM</Link>
                </li>
                <li>
                  <Link to="/innerTurizm">ICHKI TURIZM</Link>
                </li>
                <li>
                  <Link to="/discount">CHEGIRMA</Link>
                </li>
                <li>
                  <Link to="/contact">ALOQA </Link>
                </li>
                <li>
                  <DropDowner />
                </li>
              </ul>
            </NavbarLisItems>
            <Button>
              <button>ALOQA</button>
            </Button>
          </WrapperBottomNavbar>
        </GlobalContainer>
      </BottomNavbar>
    </WrapperNavbar>
  );
};

export default Navbar;
