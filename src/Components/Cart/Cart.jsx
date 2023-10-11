import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Oval } from "react-loader-spinner";
// import Style from './Cart.module'
import { Link } from 'react-router-dom';



export default function Cart() {
  let {getLoggedUserCart , removeCartItem ,updateProductQuantity} = useContext(CartContext)
  const [cartDetails, setcartDetails] = useState(null);

      async function updateCount(id,count){
        let {data} = await updateProductQuantity(id,count)
        setcartDetails(data); 
      }   


  async function removeItem(id){
    let {data} = await removeCartItem(id);
    setcartDetails(data);
  }

  async function  getCart(){
  let {data} = await  getLoggedUserCart();
  console.log(data);
  setcartDetails(data);
  }
  useEffect(()=>{
    getCart()
  });
  return <>
          {cartDetails? <div className="w-75 my-2 mx-auto p-3 bg-main-light">
            <h2 className="py-3">Shopping Cart</h2>
            <h5 className="text-main fw-bolder ">Cart Items :{cartDetails.numOfCartItems}</h5>
            <h4 className=" text-main fw-bolder mb-4">Total Cart Price :{cartDetails.data.totalCartPrice} EGP</h4>
            {cartDetails.data.products.map((product)=><div key={product.product.id} className="row border-bottom py-2 px-2">
              <div className="col-md-1">
                <img className="w-100" src={product.product.imageCover} alt="" />
              </div>
                  
              <div className="col-md-11">
                <div className="d-flex justify-content-between align-items-center">
                        <div>
                              <h3 className="h6">{product.product.title.split(' ').slice(0,3).join(' ')}</h3>
                              <h6 className="h6 text-main">Price : {product.price} EGP</h6>
                        </div>

                        <div>
                          <button onClick={()=>updateCount(product.product.id , product.count+1)} className="bg-main text-light btn  px-2 m-1">+</button>
                          <span className="mx-2 fw-bold">{product.count}</span>
                          <button onClick={()=>updateCount(product.product.id,product.count-1)} className="bg-main text-light btn px-2 m-1">-</button>
                        </div>
                </div>
                <button onClick={()=>removeItem(product.product.id)} className="btn p-0"><i className=" text-danger font-sm fa-regular fa-trash-can"></i> Remove</button>
              </div>
            </div>)}


              <Link to={'/address'} className="d-flex align-items-center justify-content-center btn bg-main w-75  m-auto text-white text-center my-3">Online Payment</Link>
              <Link className=" d-flex align-items-center justify-content-center btn bg-main w-75  m-auto text-white text-center">Cash On Delivery</Link>
              
        </div>:<section  id="loading" className="d-flex justify-content-center align-items-center">
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
          </section>}
       
  </>       
}
