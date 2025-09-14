import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'
//import Tarefa from './pages/tarefa'
import PerfilUsuario from "./pages/perfilUser";
import Interessado from './pages/interessadoFullPage'
import Interessados from "./pages/interessados";
import Tarefas from "./pages/tarefas";
import ConfigPage from "./pages/configPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/interessado" element={<Interessado />} />
        <Route path="/perfil" element={<PerfilUsuario />}/>
        <Route path="/tarefas" element={<Interessados />} />
        <Route path="/tarefa" element={<Tarefas />}/>
        <Route path="/config" element={<ConfigPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App