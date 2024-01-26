import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const ImageSlider = () => {
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = Array.from({ length: 10 }, (_, index) => (
    <img
      key={index}
      src={process.env.PUBLIC_URL + `/images/${index + 1}.jpg`}
      alt=""
      width="100%"
      className="image-item"
    />
  ));

  return (
    <div className="image-slider" style={{ backgroundColor: "white" }}>
      <Slider {...settings}>{images}</Slider>
    </div>
  );
};

export default ImageSlider;
