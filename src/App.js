import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} /> 
      <Route path='/register' element={<Register/>} /> 
    </Routes>
  )
}

export default App