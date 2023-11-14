import React from 'react'
import Slider from "react-slick";
import amazonBanner from "../assets/amazonBanner.jpg"

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}> 
          <div>
            <img src={amazonBanner} alt="bannerimages"/>
          </div> 
         
        </Slider>
      </div>
  )
}

export default Banner;