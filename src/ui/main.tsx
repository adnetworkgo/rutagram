import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Rutagram inicio">
          <span className="brand-mark">R</span>
          <span>rutagram</span>
        </a>
        <span className="status">Vista previa · MVP</span>
      </header>

      <section className="hero">
        <p className="eyebrow">TU JORNADA, MÁS SIMPLE</p>
        <h1>Todo tu trabajo<br /><span>en una sola ruta.</span></h1>
        <p className="intro">Organiza clientes, visitas y liquidaciones sin complicar tu día.</p>
        <div className="actions">
          <a className="button primary" href="#hoy">Ver mi día <span aria-hidden="true">→</span></a>
          <a className="button secondary" href="#modulos">Explorar funciones</a>
        </div>
      </section>

      <section id="hoy" className="summary">
        <div><p className="eyebrow">MI DÍA</p><h2>Una jornada bajo control</h2></div>
        <span className="date-label">Panel de demostración</span>
        <div className="stats">
          <article className="stat"><span className="stat-icon">◎</span><p>Visitas planificadas</p><strong>—</strong><small>Se mostrará al registrar actividad</small></article>
          <article className="stat"><span className="stat-icon violet">↗</span><p>Liquidaciones pendientes</p><strong>—</strong><small>Sin datos reales conectados</small></article>
          <article className="stat"><span className="stat-icon amber">✓</span><p>Tareas por completar</p><strong>—</strong><small>Tu lista diaria, en un solo lugar</small></article>
        </div>
      </section>

      <section id="modulos" className="modules">
        <div><p className="eyebrow">HECHO PARA VENTAS EN CALLE</p><h2>Menos tareas repetidas.<br />Más tiempo para vender.</h2></div>
        <div className="module-grid">
          <article className="module"><span>01</span><h3>Clientes</h3><p>Contactos, frecuencia de visita y notas de seguimiento.</p></article>
          <article className="module"><span>02</span><h3>Liquidaciones</h3><p>Organiza facturas, pagos y soportes en un flujo claro.</p></article>
          <article className="module"><span>03</span><h3>Equipo</h3><p>Comparte tareas y seguimiento básico con tu supervisor.</p></article>
        </div>
      </section>
      <footer><span>Rutagram</span><span>Privacidad desde el diseño · Versión inicial</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
