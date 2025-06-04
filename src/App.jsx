import { useState } from 'react'

import './css/Menu.css'
import './css/App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Ejercicio1 from './pages/Ejercicio1.jsx'
import EuroDolar from './pages/EuroDolar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/ejercicio1'>Ejercicio1</Link></li>
              
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ejercicio1' element={<EuroDolar />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
