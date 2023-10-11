import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Style from './Register.module';
import * as Yup from "yup";

export default function Register() {
  let navigate = useNavigate();
  const [ error , seterror] = useState(null)
  const [isLoading , setIsLoading] = useState(false);
async  function submitRegister(values) {
  setIsLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((err)=>
    {
      setIsLoading(false);
      seterror(err.response.data.message)
  });  
    if(data.message === 'success'){
      setIsLoading(false);
      navigate('/Login')
    } 
  }

  let phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let signupScheme = Yup.object({
    name: Yup.string()
      .min(3, "Name MinLength Is 3")
      .max(10, "Name MaxLength Is 10")
      .required("Name Is Required"),
    email: Yup.string().email("Email Is Invalid").required("Email Is Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone Is Invalid")
      .required("Phone Is Required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password Start With Uppercase")
      .required("Passwprd Is Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password And rePassword Dont Match")
      .required("rePassword Is Required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: signupScheme,
    onSubmit: submitRegister,
  });

  return (
    <>
      <div className="w-75 mx-auto  py-5">
        {error?<div className="alert alert-danger">{error}</div>:''}
        <h2>Register Now</h2>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control mb-2"
            id="name"
            name="name"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger p-2 mt-2">
              {formik.errors.name}
            </div>
          ) : (
            ""
          )}
            
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control mb-2"
            id="email"
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger p-2 mt-2">
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="form-control mb-2"
            id="phone"
            name="phone"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger p-2 mt-2">
              {formik.errors.phone}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password :</label>
          <input
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-control mb-2"
            id="password"
            name="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger p-2 mt-2">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="rePassword">rePassword :</label>
          <input
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            className="form-control mb-2"
            id="rePassword"
            name="rePassword"/>
          {formik.errors.rePassword && formik.touched.rePassword?(<div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>):("")}

      {
        isLoading?<button  type="button" className="btn bg-main text-white mt-2">
        <i className="fas fa-spinner fa-spin"></i>
      </button>:<button disabled={!(formik.isValid && formik.dirty)} type="submit"className="btn bg-main text-white mt-2">Register</button>}
    
        </form>
      </div>
    </>
  );
}
