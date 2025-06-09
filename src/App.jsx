import { useState } from 'react'
import './css/Menu.css'
import './css/App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import GradosFull from './pages/Grados.jsx'
import Conversores from './pages/EuroDolar.jsx'
import BotonEstado from './pages/BotonEstados.jsx'
import AnimalViewer from './pages/CambiarImagenes.jsx'
import SuperficieRectanguloFull from './pages/SuperficieRectangulo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/conversores'>Euro Dolar</Link></li>
          <li><Link to='/grados'>Grados</Link></li>
          <li><Link to='/superficierectangulo'>Superficie Rectangulos</Link></li>
          <li><Link to='/botonestados'>Boton Estados</Link></li>
          <li><Link to='/imagenes'>Imagenes</Link></li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/conversores' element={<Conversores />} />
          <Route path='/grados' element={<GradosFull />} />
          <Route path='/superficierectangulo' element={<SuperficieRectanguloFull/>} />
          <Route path='/botonestados' element={<BotonEstado />} />
          <Route path='/imagenes' element={<AnimalViewer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
