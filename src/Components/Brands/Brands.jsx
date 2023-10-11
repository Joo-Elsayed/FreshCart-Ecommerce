import React from 'react';
import { useQuery } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Oval } from 'react-loader-spinner';


const BrandsComponent = () => {
  const { data, error, isLoading } = useQuery('brands', () =>
    fetch('https://ecommerce.routemisr.com/api/v1/brands').then((response) =>
      response.json()
    )
  );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching brands: {error.message}</div>;
  // }

  return <>
  {isLoading?<div className='w-100 py-5 d-flex justify-content-center align-items-center'>
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


  </div>:<div className="row">
  {data?.data.map((brand) => (
    <div key={brand.id} className="col-md-2">
      {/* <h3>{brand.name}</h3> */}
      {/* <p>{brand.description}</p> */}
      <img src={brand.image} alt={brand.name} className='w-100' />
    </div>
  ))}
</div>}
        <div>


</div>

  
  </>
      


};

export default BrandsComponent;