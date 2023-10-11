// import logo from './logo.svg';
import "./App.css";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Categories from "./Components/Categories/Categories";
import CounterContextProvider from "./Context/CounterContext";
import { useContext, useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from './Components/ProductDetails/ProductDetails';
import UserContextProvider from "./Context/UserContext";
import { UserContext } from './Context/UserContext';
import CartContextProvider, { CartContext } from "./Context/CartContext";
import { Toaster } from 'react-hot-toast';
import Address from "./Components/Address/Address";
import Brands from "./Components/Brands/Brands";

import Profile from "./Components/Profile/Profile";
import Footer from './Components/Footer/Footer';

let routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
      { path: "login", element:<Login />},
      { path: "register", element:<Register />},
      { path: "products", element:<ProtectedRoute><Products /></ProtectedRoute>},
      { path: "brands", element:<ProtectedRoute><Brands /></ProtectedRoute>},
      { path: "categories", element:<ProtectedRoute><Categories /></ProtectedRoute>},
      { path: "cart", element: <ProtectedRoute><Cart /> </ProtectedRoute>},
      { path: "address", element: <ProtectedRoute><Address /> </ProtectedRoute>},
      { path: "profile", element: <ProtectedRoute><Profile /> </ProtectedRoute>},
      { path: "footer", element: <ProtectedRoute><Footer /> </ProtectedRoute>},
      { path: "productdetails/:id", element: <ProtectedRoute><ProductDetails /></ProtectedRoute>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {

  let {setUserToken} = useContext(UserContext);
useEffect(()=>{
  if(localStorage.getItem('userToken')!=null){
    setUserToken(localStorage.getItem('userToken'))
  }
},);

  return  <CartContextProvider>
  <CounterContextProvider>
            <RouterProvider router={routers}> </RouterProvider>
            </CounterContextProvider>
            <Toaster/>
  </CartContextProvider>


  
  

}
export default App;
