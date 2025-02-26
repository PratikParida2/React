import React from 'react'
import { useAddProductsMutation } from '../app/services/ApiSection'
const AddNewProduct = () => {
  const [addNewProduct,{data,isError,isLoading}]=useAddProductsMutation();
  console.log(data);
  if(isError)
  {
    return <h1>There Is A Error Ocurred</h1>
  }
  if(isLoading)
  {
    return <h1>Loading...</h1>
  }
  const handleAddProduct=async()=>
  {
    try 
    {
      const newProduct={
        id:1,
        title:"Smart Phone",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur reprehenderit, vero nemo quas aut perferendis!",
      }
      await addNewProduct(newProduct);

    } catch (Error) 
    {
      console.log("We Got An Error Bro "+Error);
    }
  }

  return (
      <>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleAddProduct} disabled={isLoading}>Add Product</button>
      </>
  )
}

export default AddNewProduct
