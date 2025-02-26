import React from 'react'
import { useUpdateProductMutation } from '../app/services/ApiSection'
const UpdataProduct = ({productId}) => {
    const [updateProduct,{data,isError,isLoading}]=useUpdateProductMutation();
    console.log(data);
    if(isError)
    {
        return <h1>There Is An Error Occured</h1>
    }
    if(isLoading)
    {
        return <h1>Loading...</h1>
    }
    const handleUpdateProduct=async()=>
    {
        try 
        {
            const updatedProduct=
            {
                title:"Title Is Updated",
            };
            await updateProduct({
                id:productId,
                updateProduct:updatedProduct,
            });
        } 
        catch (err) 
        {
            console.log("We Got An Error Bro.."+err);
        }
    }
  return (
    <div>
        <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  )
}

export default UpdataProduct
