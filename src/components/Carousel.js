import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Slide1 from "../images/Slider1.jpg";
import Slide2 from "../images/Slider2.jpg";
import SlideMobile1 from "../images/SliderMobile1.jpg";
import SlideMobile2 from "../images/SliderMobile2.jpg";
import TypeAnimation from "react-type-animation";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
  };
  return (
    <>
      <Slider {...settings} className=" no-mb slider-container">
        <div>
          <div className="text-container">
            <div className="left-sec"></div>
            <div className="right-sec">
              <div className="carousel-content">
                <TypeAnimation
                  className="no-mb"
                  style={"font-size:20px"}
                  cursor={true}
                  sequence={[
                    "  Topnotch Professional Installation Guaranteed",
                    3000,
                    "Topnotch Professional Installation Guaranteed",
                    3000,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                />
                <Link to="/quote">
                  <button className="btn btn-carousel">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
          <div id="overlay"></div>
          <img src={Slide1} />
        </div>
      </Slider>
      <Slider {...settings} className="no-des slider-container">
        <div>
          <div className="text-container">
            <div className="left-sec"></div>
            <div className="right-sec">
              <div className="carousel-content">
                <TypeAnimation
                  style={"font-size:20px"}
                  cursor={true}
                  sequence={[
                    "  Topnotch Professional Installation Guaranteed",
                    3000,
                    "Topnotch Professional Installation Guaranteed",
                    3000,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                />
                <Link to="/quote">
                  <button className="btn btn-carousel">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
          <div id="overlay"></div>
          <img src={SlideMobile1} />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
