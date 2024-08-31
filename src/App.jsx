import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/netfilex/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
 </Routes>
    </>
  )
}

export default App
