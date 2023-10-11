  import axios from "axios";
  import { useContext } from "react";
  import { Oval } from "react-loader-spinner";
  import { useQuery } from "react-query";
  import { Link } from "react-router-dom";
  import { CartContext } from "../../Context/CartContext";
  import toast from "react-hot-toast";


  // import React, { useState } from "react";
  // import { useEffect } from "react";
  // import Style from './FeaturedProduct.module'

  export default function FeaturedProduct() {
    let {addToCart}  = useContext(CartContext);

    async function addProductToCart(productId){
    let response= await addToCart(productId)
    if(response.data.status==='success'){
        toast.success('Product Successfully Added',{
          duration: 3000,
          position: 'top-center',
        })
    }else
    {
        toast.error('Error Adding Product ')
    }
    // console.log(response);
        }

            function getFeaturedProducts(){
              return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
            } 
            let {isLoading , data} = useQuery('featuredProducts' ,getFeaturedProducts,{
              // cacheTime:3000,
              // refetchOnMount:false
              // staleTime:3000,
              // refetchInterval:5000,
            
            } );
          

  //     const [featuredProduct, setfeaturedProduct] = useState([])
    

  //  async function getFeaturedProducts(){
  //       let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  //       setfeaturedProduct(data.data)
  //     }
  //     useEffect(()=>{ 
  //       getFeaturedProducts();
  //     },[])
      
    return <>
        {isLoading?<div className="w-100 py-5 d-flex justify-content-center align-items-center">
          <Oval
    height={80}
    width={80}
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
            </div>:
  
  <div className="container pt-3">
  <h2 className="text-main fw-bold py-2">Featured Products</h2>
  <div className="row g-3">
  {data?.data.data.map((product)=>
    <div key={product.id} className="col-md-2 product py-2">

        <Link to={`/productdetails/${product.id}`}>
      <img src={product.imageCover} height={260} className="w-100" alt="product-Item" />
      <h2 className="fs-5 text-main fw-bold">{product.category.name}</h2>
      <h6>{product.title.split(' ').splice(0,2).join(' ')}</h6>
      <div className="d-flex justify-content-between ">
      <span>{product.price} EGP</span>
      <span>
        <i className="fas fa-star rating-color"></i>{product.ratingsAverage}</span>
      </div>
      </Link>
      <button onClick={()=>addProductToCart(product.id)} className="btn bg-main text-white text-center w-100 my-2">Add To Cart</button>

    </div>)}
  </div>
  </div>}

 
    </>       
  }
