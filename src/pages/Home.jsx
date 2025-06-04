import React, { Component } from 'react'
import yo from '../logos/image.png'

export class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={yo} alt="GitHub logo" style={styles.logo} />
        <h1 style={styles.name}>Andy Torres</h1>
        <h2 style={styles.career}>Estudiante de Ingeniería en Tecnologías de la Información</h2>
        <p style={styles.description}>
          Apasionado por el desarrollo de software, redes y seguridad informática. 
          Actualmente cursando el 5to semestre y trabajando como Junior Backend Developer.
        </p>
        <a href="https://github.com/TorresAnndy" target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
          Visita mi GitHub
        </a>
      </div>
    )
  }
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#00ffff',
    padding: '1rem',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: '12px',
    boxShadow: '0 0 20px #00ffff',
  },
  logo: {
    width: '180px',       // tamaño más grande
    height: '180px',      // para que sea cuadrado y luego redondo con borderRadius
    marginBottom: '1rem',
    borderRadius: '50%',  // hace que la imagen sea redonda
    objectFit: 'cover',   // para que la imagen se recorte bien y no se deforme
    border: '3px solid #00ffff', // opcional, un borde neón para destacar
  },
  name: {
    fontSize: '2.5rem',
    margin: '0.5rem 0',
    fontWeight: '700',
    fontFamily: "'Orbitron', sans-serif",
  },
  career: {
    fontSize: '1.5rem',
    margin: '0.5rem 0 1rem 0',
    fontWeight: '500',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  githubLink: {
    display: 'inline-block',
    padding: '0.5rem 1.5rem',
    backgroundColor: '#00ffff',
    color: '#000',
    fontWeight: '600',
    borderRadius: '30px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  }
}


export default Home
