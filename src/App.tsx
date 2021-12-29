import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Map } from './pages/Map/index'
import { Login } from './pages/Login/index'

import './global.scss'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Map/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
