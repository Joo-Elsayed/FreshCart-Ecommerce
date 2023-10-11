import React from "react";
// import Style from "./Profile.module.css";
import jwtDecode from "jwt-decode";

export default function Profile() {
  let token = localStorage.getItem("userToken");
  let decoded = jwtDecode(token);
  return (
    <div className="w-75 my-5 bg-body-secondary p-3 mx-auto">
      <h4 className="border-bottom pb-3 mb-3 text-main fw-bold">Profile Page</h4>
      <div className="d-flex justify-content-between">
        <div className="pt-3 fw-bolder">
          <p>User Name : {decoded.name}</p>
          <p>User Role : {decoded.role}</p>
          <p>User Id : {decoded.id}</p>
        </div>
        <div>
          <i
            className="fa-regular fa-circle-user text-main"
            style={{ fontSize: "150px" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
