import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Alider.css";
import image1 from '../assets/img5.png';
import image2 from '../assets/img44.png';
import { useState } from "react";

const Alider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [animate, setAnimate] = useState(true);
  
  const handleSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="will">
      <div className="slider-container">
        <Slider {...settings}>
            
          <div>

            <h2 className={`carousel-text ${animate ? 'animate-down' : ''}`}>
              The Hearth Of The Farm Is The True <br/>Center Of Our Universe.
            </h2>
            <p className={`carousel-text1 ${animate ? 'animate-down' : ''}`}>
              Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus.<br/> Aenean euismod est at mauris mollis ultricies.
              Morbi arcu mi, dictum eu luala, dapibus
              interdum mollis.
            </p><br/>
            <button className={`conButton ${animate ? 'animate-down' : ''}`}>CONTACT US</button> 

            <div className="red" controls={false} indicators={false} interval={5000}
            onSlid={handleSlide}>
              <img src={image1} alt='Farmie' className='home-image1' />
            </div>
          </div>

          <div>
            <div className="wine">
              <img src={image2} alt='Farmie' className='home-image1' />
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Alider;


 {/* <div>
            <div className="blue">
              <h3>3</h3>
            </div>
          </div> */}
