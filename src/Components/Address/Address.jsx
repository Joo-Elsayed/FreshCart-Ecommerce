import { useFormik } from "formik";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import Style from './Address.module'

export default function Address() {
        let {OnlinePayment,cartId} = useContext(CartContext); 
  async function handleAddressSubmit(values){
      let response = await OnlinePayment(cartId,'http://localhost:3000', values);
      console.log(response?.data.session.url);
      window.location.href = response?.data.session.url;
  } 
  let formik = useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },onSubmit:handleAddressSubmit
  })
  return <>
          <div className="container ">
              <form onSubmit={formik.handleSubmit}> 

                <label htmlFor="details">Details :</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange}   value={formik.values.details} type="text" name="details" id="details" className="form-control mb-2" />
                

                <label htmlFor="phone">Phone :</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange}   value={formik.values.phone} type="tel" name="phone" id="phone" className="form-control mb-2" />

                <label htmlFor="city">City :</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange}   value={formik.values.city} type="text" name="city" id="city" className="form-control mb-2" />

                <button type="submit" className="btn bg-main text-white">Pay Now</button>
              </form>
          </div>
  </>       
}
