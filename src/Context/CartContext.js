import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";


export let CartContext= createContext();

let userToken = localStorage.getItem('userToken');
let headers  = {
    token:userToken
}


function removeCartIData(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:headers
    }).then((response)=>response)
    .catch((error)=> error)
    }



function addToCart(productId){
  return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
        productId:productId
    },{
        headers:headers
    }).then((response)=>response)
    .catch((error)=> error)
}

function getLoggedUserCart(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers:headers
        })
        .then((response)=>response)
        .catch((err)=>err)
}

function removeCartItem(productId){
return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
    headers:headers
}).then((response)=>response)
.catch((error)=> error)
}

function updateProductQuantity(productId , count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count:count},{headers:headers})
    .then((response)=>response)
    .catch((error)=>error)
}

function OnlinePayment(cartId ,url, values){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
    {
        shippingAddress:values
    },{headers:headers})
    .then((response)=>response) 
    .catch((error)=>error);
}   



function cashOnDelivery(cartId ,url, values){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}?url=${url}`,
    {
        shippingAddress:values
    },{headers:headers})
    .then((response)=>response) 
    .catch((error)=>error);
}    





export default function CartContextProvider(props) {

    const [cartId, setcartId] = useState(null)
            async function getCart(){
                let {data} =await getLoggedUserCart();
                setcartId(data?.data._id);
                // console.log(data?.data._id);
        }

    useEffect(()=>{
        getCart(); 

    },[]);
    return  <CartContext.Provider value={{cartId,addToCart,cashOnDelivery ,OnlinePayment,getLoggedUserCart,removeCartItem,removeCartIData,updateProductQuantity}}>
            {props.children}
    </CartContext.Provider>
}