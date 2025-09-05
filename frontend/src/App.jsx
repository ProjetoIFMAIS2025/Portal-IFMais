import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import PerfilUsuario from "./pages/perfilUsuario";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<PerfilUsuario/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
