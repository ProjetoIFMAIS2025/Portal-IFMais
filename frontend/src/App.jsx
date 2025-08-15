import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Login from './pages/loginPage.jsx'
import Cadastro from './pages/cadastroPage.jsx'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
