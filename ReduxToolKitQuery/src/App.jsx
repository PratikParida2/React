import React from 'react'
import GetAllProductsDetails from './components/getAllProductsDetails'
import AddNewProduct from './components/addNewProduct'
import UpdataProduct from './components/UpdataProduct'
import DeleteProduct from './components/DeleteProduct'
const App = () => {
  return (
    <div>
      {/* <GetAllProductsDetails/> */}
      {/* <AddNewProduct/> */}
      {/* <UpdataProduct productId={23}/> */}
      <DeleteProduct productId={23}/>
    </div>
  )
}

export default App
