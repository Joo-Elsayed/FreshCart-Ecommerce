// import React, { useEffect } from "react";
// import Style from './Layout.module'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from "react-router-dom";
import { Offline} from "react-detect-offline";


export default function Layout() {
  return <>
        <Navbar/>
        <div className="container">
        <Outlet></Outlet>
        </div>

        <div>
     <Offline>
      <div className='network'>
           <i className='fas fa-wifi'></i> You Are Offline
      </div>
     </Offline>
  </div>
        <Footer/>
  </>       
}
