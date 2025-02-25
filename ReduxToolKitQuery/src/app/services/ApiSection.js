import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const getAllProducts = createApi({
    reducerPath: 'getAllProducts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
      //builder.query() for geting the data
      getAllProducts: builder.query({
        query: () => '/products',
      }),
      getProductById:builder.query({
        query:(id)=>`/products/${id}`,
      }),
      addProducts:builder.mutation({
        query:(newProduct)=>({
          url:"/products/add",
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:newProduct,
        })
      }),
    }),
  })
  export const { useGetAllProductsQuery ,useGetProductByIdQuery} = getAllProducts;