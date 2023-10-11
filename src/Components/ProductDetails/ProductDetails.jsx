import axios from "axios";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import {useParams } from "react-router-dom";


// import Style from './ProductDetails.module'

export default function ProductDetails() {
  

  let params = useParams();
  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  let {data } = useQuery("productDetails", () =>
    getProductDetails(params.id)
  );

  // console.log(data?.data.data);
  
  return (
    <>
      {data?.data.data ? (
        <div className="row py-2 align-items-center">
            <Helmet>
                <meta name="description" content="" charSet="utf-8" />
                <title>{data?.data.data.title}</title>
            </Helmet>
          <div className="col-md-4">
            <img
              className="w-100"
              src={data?.data.data.imageCover}
              alt={data?.data.data.title}
            />
          </div>
          <div className="col-md-8">
            <h2 className="h5">{data?.data.data.title}</h2>
            <p>{data?.data.data.description}</p>
            <h6 className="text-main">{data?.data.data.category?.name}</h6>
            <h6>Price :{data?.data.data.price} EGP</h6>
            <div className="d-flex justify-content-between">
              <span>ratingsQuantity : {data?.data.data.ratingsQuantity}</span>
              <span>
                <i className="fas fa-star rating-color"></i>{" "}
                {data?.data.data.ratingsAverage}
              </span>
            </div>
            <button className="btn bg-main text-white w-100 mt-2">
              Add To Cart
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
