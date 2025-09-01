import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HomePage from './pages/homePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App