import React from 'react';
import { useGetAllProductsQuery ,useGetProductByIdQuery} from '../app/services/ApiSection';

const GetAllProductsDetails = () => {
    const {data,isError,isLoading}=useGetAllProductsQuery();
    const dataById=useGetProductByIdQuery(15);
    console.log(dataById);
    if(isLoading)
    {
      return <h1>Loading...</h1>
    }
    if(isError)
    {
      return <h1>Error</h1>
    }
    // console.log(data);
  return (
    <>
      <h1>Get App Products</h1>
      <h1>{data && data.products && data.products.map((e)=><div key={e.id}><h2>{e.description}</h2></div>)}</h1>
      <h1>Data By Id : {dataById.currentData.brand}</h1>
    </>
  )
}

export default GetAllProductsDetails;