import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
      <img src="https://images.satu.kz/63425361_63425361.jpg" className='w-100 h-50' alt="sneakers"/>
      </div>
      <div>
      <img  src="https://images.satu.kz/125639741_125639741.jpg"  className='w-100 h-50' alt="sneakers"/>
      </div>
      <div>
      <img src="https://images.satu.kz/126107235_126107235.jpg" className='w-100 h-50' alt="sneakers"/>
      </div>
    </Slider>
  );
};

export default MyCarousel;
