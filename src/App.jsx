import { useState } from 'react'

import './css/Menu.css'
import './css/App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Grados from './pages/Grados.jsx'
import EuroDolar from './pages/EuroDolar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/eurodolar'>Euro Dolar</Link></li>
              <li><Link to='/grados'>Grados</Link></li>
              
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eurodolar' element={<EuroDolar />} />
            <Route path='/grados' element={<Grados />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
