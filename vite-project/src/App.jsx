import { useState } from 'react'
import Header from '../Components/Header'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <Header></Header>
       <>React Project</>
    </>
  )
}

export default App
