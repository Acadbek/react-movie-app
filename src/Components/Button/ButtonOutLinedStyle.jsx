import styled from "styled-components";

export const ButtonOuter = styled.button`
  button {
    margin: 10px;
    border-radius: 25px;
    padding: 15px 30px;
    border: 2px solid #fff;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
  }

  button:hover {
    border-color: #174b90;
    background: #174b90;
  }
`;

