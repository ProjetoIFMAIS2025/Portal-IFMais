import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'
import Tarefa from './components/tarefa'
import Tarefas from "./pages/tarefas";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App