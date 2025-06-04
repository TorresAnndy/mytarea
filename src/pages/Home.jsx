import React, { Component } from 'react'
import yo from '../logos/image.png'
import '../css/Presentacion.css'

export class Home extends Component {
  render() {
    return (
      <div className="presentacion-container">
        <img src={yo} alt="Foto de Andy" className="presentacion-logo"/>
        <h1 className="presentacion-name">Andy Gonzales</h1>
        <h2 className="presentacion-career">Estudiante de Ingeniería en Tecnologías de la Información</h2>
        <p className="presentacion-description">
          Apasionado por el desarrollo de software, redes y seguridad informática. <br />
          Developer Backend Junior <br />
          5to TI. <br />
          Desarrollo Basado en Plataformas.
        </p>
        <a 
          href="https://github.com/TorresAnndy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="presentacion-github-link"
        >
          Visita mi GitHub
        </a>
      </div>
    )
  }
}

export default Home
