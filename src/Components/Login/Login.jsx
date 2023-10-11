import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Style from './Register.module';
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

export default function Login() {
  let {setUserToken , setUserData} = useContext(UserContext);
  let navigate = useNavigate();
  const [ error , seterror] = useState(null)
  const [isLoading , setIsLoading] = useState(false);
async  function loginSubmit(values) {
  setIsLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((err)=>
    {
      setIsLoading(false);
      seterror(err.response.data.message)
  });  
    if(data.message === 'success'){
      setIsLoading(false);
      localStorage.setItem('userToken' , data.token);
      setUserToken(data.token);
      setUserData(data.user)
      navigate('/')
    } 
  }

  
  let signupScheme = Yup.object({

    email: Yup.string().email("Email Is Invalid").required("Email Is Required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, "Password Start With Uppercase").required("Passwprd Is Required")
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: signupScheme,
    onSubmit: loginSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto  py-5">
        {error?<div className="alert alert-danger">{error}</div>:''}
        <h2>Login Now</h2>

        <form onSubmit={formik.handleSubmit}>

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


      {
        isLoading?<button  type="button" className="btn bg-main text-white mt-2">
        <i className="fas fa-spinner fa-spin"></i>
      </button>:  
        <>
          <div className="d-flex align-items-center">
          <button disabled={!(formik.isValid && formik.dirty)} type="submit"className="btn bg-main text-white mt-2 mx-2">Login</button>
          <Link className="btn" to={'/register'}>Register Now</Link>
          </div>
        </>
    }
        </form>
      </div>
    </>
  );
}
