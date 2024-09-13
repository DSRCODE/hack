import React from "react";
import SlickSlider from "react-slick"; // Renamed to avoid conflict
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Slider.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <SlickSlider {...settings} className="slick-slider">
      <div className="slide-item">
        <img src="https://wallpaperaccess.com/full/343552.jpg" alt="Sports 1" />
        {/* <div className="slide-content">
          <h3>Play Sports</h3>
          <button className="explore-button">Explore Now!</button>
        </div> */}
      </div>
      <div className="slide-item">
        <img
          src="https://cdn-ilaogih.nitrocdn.com/fLSFViCIvgCxULlESUxkAIQneHAzcJpv/assets/images/optimized/rev-a133209/sportradar.com/wp-content/uploads/2024/05/Synergy-player-tracking-post-preview.jpg"
          alt="Sports 2"
        />
        {/* <div className="slide-content">
          <h3>Player's Monitoring</h3>
          <button className="explore-button">Explore Now!</button>
        </div> */}
      </div>
      <div className="slide-item">
        <img
          src="https://www.designmantic.com/blog/wp-content/uploads/2021/02/Sports-Logo-Designs.jpg"
          alt="Sports 3"
        />
        {/* <div className="slide-content">
          <h3>Be Active</h3>
          <button className="explore-button">Explore Now!</button>
        </div> */}
      </div>
    </SlickSlider>
  );
};

export default Slider;
