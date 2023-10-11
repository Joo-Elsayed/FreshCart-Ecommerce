import React from "react";
import Slider from "react-slick";
// import Style from './MainSlider.module'
import slide1 from '../../Assets/Images/slider-image-1.jpeg';
import slide2 from '../../Assets/Images/slider-image-2.jpeg';
import slide3 from '../../Assets/Images/slider-image-3.jpeg';
import blog1 from '../../Assets/Images/c-d-x-PDX_a_82obo-unsplash.jpg';
import blog2 from '../../Assets/Images/galina-n-miziNqvJx5M-unsplash.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 



export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false

  };
  return <>
  <div className="row gx-0 pt-3">
      <div className="col-md-10">
      <Slider {...settings}>
        <img height={400} className="w-100" src={slide1} alt="Slider-Img1" />
        <img height={400} className="w-100" src={slide2} alt="Slider-Img2" />
        <img height={400}  className="w-100" src={slide3} alt="Slider-Img3" />  
    </Slider>
      </div>
      <div className="col-md-2">
          <img height={200} src={blog1} className="w-100" alt="SliderBlog1" />
          <img height={200} src={blog2} className="w-100" alt="SliderBlog2" />
      </div>
  </div>
   
  </>       
}
