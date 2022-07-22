import React from "react";
import { GlobalContainer } from "../../styles/GlobalStyle.styled";
import Button from "../Button/Button";
import { ClientContainer, SectionClient } from "./ClientStyle";

const Client = () => {
  return (
    <section>
      <SectionClient>
        <ClientContainer>
          <div className="client_row">
            <div className="col_left">
              <h5>CHEGIRMA TAKLIF</h5>
              <h2>RO'YXATLANISHDA MAXSUS CHEGIRMALAR BO'LING!</h2>
              <p>
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantm sit.
              </p>
              <a href="#">
                <Button>Habar Yuborish</Button>
              </a>
            </div>
            <div className="col_right">
              <div className="client_logo">
                <ul>
                  <li>
                    <img
                      src="http://www.xondoppitravel.com/admin/files/image/client-img1.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="	http://www.xondoppitravel.com/admin/files/image/client-img2.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="http://www.xondoppitravel.com/admin/files/image/client-img3.png"
                      alt=""
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="	http://www.xondoppitravel.com/admin/files/image/client-img4.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="http://www.xondoppitravel.com/admin/files/image/client-img5.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="	http://www.xondoppitravel.com/admin/files/image/client-img4.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ClientContainer>
        <div className="overlay"></div>
      </SectionClient>
    </section>
  );
};

export default Client;
