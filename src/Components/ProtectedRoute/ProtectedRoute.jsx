import React from "react";
import { Navigate } from "react-router-dom";
// import Style from './ProtectedRoute.module'


export default function ProtectedRoute(props) {
if(localStorage.getItem('userToken')!==null){
  return props.children
}
else{
  return <Navigate to={'./Login'}/>
}


  return <>
  <h1>ProtectedRoute</h1>
  </>       
}
