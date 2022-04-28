import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App