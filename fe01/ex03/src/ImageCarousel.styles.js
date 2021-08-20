import styled from "styled-components";

const CarouselStyled = styled.div`
  display: flex;
  img {
    width: 1000px;
    object-fit: cover;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 600px;
      object-fit: cover;
    }
  }
  margin-bottom: 40px;
`;

export default CarouselStyled;
