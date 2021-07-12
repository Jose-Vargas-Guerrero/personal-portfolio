import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Informacion from './components/Informacion';
import Habilidades from './components/Habilidades';
import Trabajos from './components/Trabajos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Informacion/>
      <Habilidades/>
      <Trabajos/>
      <Footer/>
    </div>
  );
}

export default App;
