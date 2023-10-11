import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";




// import Style from './CategorySlider.module'


export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  function getCategories(){
      return  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let {data} = useQuery('categorySlider' ,getCategories);
  // console.log(data?.data.data);
  return <> 
      

        {data?.data.data? 
        
          <div className="py-4">
                <h5>Shop Popular Categories</h5>

            <Slider {...settings}>
        {data?.data.data.map((category)=><img height={200} key={category._id} src={category.image} alt="Category-Slider" className="w-100"/>)}
        </Slider>
          </div>
        :''}
  </>       
}
