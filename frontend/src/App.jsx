import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'
import Tarefa from './pages/tarefa'
import PerfilUsuario from "./pages/perfilUser";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/perfil" element={<PerfilUsuario />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App