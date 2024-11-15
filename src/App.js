import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Tendencias 2024</div>
        <nav className="nav">
          <a href="#home">Inicio</a>
          <a href="#tendencias">Tendencias</a>
          <a href="#como-hacerlo">Cómo hacerlo</a>
          <a href="#conclusion">Conclusión</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Tendencias en Diseño UX/UI 2024</h1>
        <p>Inspirado en los mejores diseños para ofrecer una experiencia inmersiva.</p>
      </section>

      {/* Tendencias Section */}
      <section id="tendencias" className="section tendencias">
        <h2>Tendencias Clave</h2>
        <ul>
          <li>🎨 <strong>Diseño Inclusivo y Accesible</strong>: Interfaces para todos.</li>
          <li>⚡ <strong>Microinteracciones Intuitivas</strong>: Respuesta rápida y moderna.</li>
          <li>🤖 <strong>IA Avanzada</strong>: Personalización inteligente.</li>
          <li>🌐 <strong>Estilos 3D e Inmersivos</strong>: Experiencias envolventes.</li>
          <li>🌙 <strong>Dark Mode y Temas Personalizables</strong>: Ajustes al gusto del usuario.</li>
        </ul>
      </section>

      {/* Explicación Section */}
      <section id="como-hacerlo" className="section como-hacerlo">
        <h2>Cómo Hacer Este Proyecto</h2>
        <p>
          Este proyecto utiliza React para el desarrollo del frontend. Sigue los siguientes pasos para crear esta página:
        </p>
        <ol>
          <li>Instala Node.js y crea un proyecto con <code>npx create-react-app</code>.</li>
          <li>Configura los componentes principales en React.</li>
          <li>Estiliza con CSS para lograr un diseño moderno.</li>
          <li>Publica el proyecto en GitHub Pages.</li>
        </ol>
      </section>

      {/* Conclusión Section */}
      <section id="conclusion" className="section conclusion">
        <h2>Conclusión</h2>
        <p>
          Este proyecto nos permitió explorar las tendencias modernas en diseño UX/UI y aprender a crear interfaces atractivas
          y funcionales utilizando React. La experiencia colaborativa fue clave para lograr un producto final de calidad.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Creado con 💖 para inspirar a los diseñadores del futuro.</p>
      </footer>
    </div>
  );
}

export default App;
