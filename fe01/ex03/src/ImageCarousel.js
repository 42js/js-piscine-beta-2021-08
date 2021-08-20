import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselStyled from "./ImageCarousel.styles";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <CarouselStyled>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        prevLabel={null}
        nextLabel={null}
      >
        <Carousel.Item interval={1000}>
          <img
            src="https://user-images.githubusercontent.com/52448114/130233215-8719a0d8-9900-466c-ab6b-4c630944e3d8.jpg"
            alt="desktop"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            src="https://user-images.githubusercontent.com/52448114/130233225-5ac310bc-4eb9-411b-b838-2b158243805b.jpg"
            alt="seoul"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            src="https://user-images.githubusercontent.com/52448114/130233222-9a723775-4e65-4032-82d1-245f3931f251.jpg"
            alt="books"
          ></img>
        </Carousel.Item>
      </Carousel>
    </CarouselStyled>
  );
};

export default ImageCarousel;
