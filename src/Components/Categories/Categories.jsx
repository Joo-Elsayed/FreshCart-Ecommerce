import React from 'react';
import { useQuery } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Oval } from 'react-loader-spinner';


const CategoriesComponent = () => {
  const { data, error, isLoading } = useQuery('categories', () =>
    fetch('https://ecommerce.routemisr.com/api/v1/categories').then((response) =>
      response.json()
    )
  );


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
  </div>:    <div>
      <div className="row gy-2 pt-5">
        {data?.data.map((category) => (
          <div key={category.id} className="col-md-2 m-3">
            <h3 className='h5 text-center fw-bold '>{category.name}</h3>
            <p>{category.description}</p>
            <img className='w-100' height={200} src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>}
    </>
};

export default CategoriesComponent;