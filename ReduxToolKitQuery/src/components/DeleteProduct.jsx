import React from 'react'
import { useDeleteProductMutation } from '../app/services/ApiSection'
const DeleteProduct = ({productId}) => 
{
    const [deleteProduct,{data,isError,isLoading}]=useDeleteProductMutation();

    if(isError)
    {
        return <h1>There Is An Error</h1>
    }
    if(isLoading)
    {
        return <h1>Loading Bro</h1>
    }
    const handleDeleteProduct=async()=>
    {
        try {
            
            await deleteProduct(productId);


        } catch (error) {
            console.log("We Got An Error Bro...");
        }
    }
  return (
    <div>
        <h1>{data?.title ? ` ${data.title} data is Deleted` : ''} </h1>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct
