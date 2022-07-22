import styled from "styled-components";

export const GalleryContainer = styled.div`
margin:50px 0 ;
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto auto;
  img {

    border-radius: 25px;
    cursor: pointer;
  }
`;
