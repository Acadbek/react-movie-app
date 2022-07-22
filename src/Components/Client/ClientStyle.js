import styled from "styled-components";

export const SectionClient = styled.div`
  position: relative;
  margin: 50px 0;
  height: 70vh;
  background-image: url("http://www.xondoppitravel.com/admin/files/banner-img1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  h5 {
    margin: 0 0 15px;
    line-height: 1.2;
    font-size: 16px;
    color: #fff;
  }

  h2 {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 15px;
    line-height: 1.2;
  }

  p {
    margin-bottom: 30px;
    color: #fff;
    line-height: 1.6;
    margin: 0 0 15px;
    word-wrap: break-word;
    font-size: 15px;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    }
`;

export const ClientContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  .client_row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .client_logo ul {
    display: flex;
  }

  .client_logo ul li {
    padding: 20px 15px;
  }

  .col_left {
    width: 550px;
  }

  .col_right {
    width: 550px;
  }
`;
