import React from "react";
import { UpperFooter } from "../styles/FooterStyle";
import { FooterContainer, GlobalContainer } from "../styles/GlobalStyle.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <GlobalContainer>
        <UpperFooter>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <div className="footer_logo">
                  <a href="#">
                    <img
                      src="http://xondoppitravel.com/admin/files/keraklisi.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="textwidget ">
                  <p>
                    O'zbekistondada sayohlik agentliklar bo’limining so’rov
                    ma'lumoti keltirilgan sahifadan iborat. Bu katalog sizga
                    ularning manzil va telefonlari.
                  </p>
                </div>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <h3 className="widget-title">Buyurtma Berish</h3>
                <ul>
                  <li>tashqi turizm</li>
                  <li>ichki turizm</li>
                  <li>Chegirma</li>
                  <li>Aloqa</li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <h3 className="widget-title">BIZ BILAN ALOQA</h3>
                <ul>
                  <li>
                    Bemalol bog'laning va bizga yetib boring!! va shunga harakat
                    qiling
                  </li>
                  <li>
                    <i>T</i>
                    <a href="tel:+998-90-531-34-13"> +998-90-531-34-13</a>
                  </li>
                  <li>
                    <i>T</i>
                    <a href="tel:+998-90-531-34-13">
                      {" "}
                      xondoppi.travel@gmail.com
                    </a>
                  </li>
                  <li>
                    <i>T</i>
                    <a href="tel:+998-90-531-34-13">
                      {" "}
                      3146 Koontz, Kaliforniya
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <aside className="widget">
                <h3 className="widget-title">GALAREYA</h3>
                <ul>
                  <li>tashqi turizm</li>
                  <li>ichki turizm</li>
                  <li>Chegirma</li>
                  <li>Aloqa</li>
                </ul>
              </aside>
            </div>
          </div>
        </UpperFooter>
      </GlobalContainer>
    </FooterContainer>
  );
};

export default Footer;
