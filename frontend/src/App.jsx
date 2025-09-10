import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'
import PerfilUsuario from "./pages/perfilUser";
import Tarefa from './components/tarefa'
import Tarefas from "./pages/tarefas";
import ConfigPage from "./pages/configPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/perfil" element={<PerfilUsuario />}/>
        <Route path="/tarefas" element={<Tarefas  />} />
        <Route path="/config" element={<ConfigPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App