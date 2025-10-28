import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Alider.css";

const Alider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="will">
      <div className="slider-container">
        <Slider {...settings}>
            
          <div>
            <div className="red">
              <h3>1</h3>
            </div>
          </div>

          <div>
            <div className="wine">
              <h3>2</h3>
            </div>
          </div>

          <div>
            <div className="red">
              <h3>3</h3>
            </div>
          </div>

          <div>
            <div className="wine">
              <h3>4</h3>
            </div>
          </div>

          <div>
            <div className="red">
              <h3>5</h3>
            </div>
          </div>

          <div>
            <div className="wine">
              <h3>6</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Alider;
