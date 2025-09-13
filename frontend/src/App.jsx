import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'
//import Tarefa from './pages/tarefa'
import PerfilUsuario from "./pages/perfilUser";
import Interessado from './pages/interessadoFullPage'
import Tarefas from "./pages/interessados";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/tarefa" element={<Interessado />} />
        <Route path="/perfil" element={<PerfilUsuario />}/>
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App