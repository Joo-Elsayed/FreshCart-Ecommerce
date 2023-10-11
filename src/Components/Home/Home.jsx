import React from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import MainSlider from './../MainSlider/MainSlider';
import CategorySlider from './../CategorySlider/CategorySlider';
import { Helmet } from "react-helmet";



// import Style from './Home.module.css'
export default function Home() {

  return <> 
  <Helmet>
                <meta name="description" content="" charSet="utf-8" />
                <title>Fresh Cart Home</title>
            </Helmet>

  <MainSlider/>
  <CategorySlider/>
  <FeaturedProduct/>
  </>       
}
