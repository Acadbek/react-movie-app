import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto auto;
  img {
    
    border-radius: 25px;
    cursor: pointer;
  }
`;
