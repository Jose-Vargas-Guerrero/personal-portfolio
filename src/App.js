
import React from 'react';
import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Informacion from './components/Informacion';
import Habilidades from './components/Habilidades';
import Trabajos from './components/Trabajos';
import Footer from './components/Footer';
import spanish from './components/spanish';
import english from './components/english';




function App() {
  const [show, setShow] = useState(true)
  const handleShow = () => {
    setShow(!show)
  }
  console.log(show)

  let languaje = spanish

  {!show ? languaje = english : languaje = spanish}



  return (
    <div className="App">
    <div className='top-bar'>
    <p className='Espanish'>Espanish</p>
    <label className="form-switch">
      <input type="checkbox" onChange={handleShow}/>
      <i></i>
    </label>
    <p className='English'>English</p>
    </div>
      <Hero title={languaje.title} slogan={languaje.slogan} button={languaje.button}/>
      <Informacion name={languaje.name} description={languaje.description}/>
      <Habilidades habilities={languaje.habilities} complements={languaje.complements} libraries={languaje.libraries} webs={languaje.webs}
      webslogan={languaje.webSlogan} marketing={languaje.marketing} marketingslogan={languaje.marketingSlogan} 
      />
      <Trabajos projectname={languaje.projectname}
      projectdescription={languaje.projectdescription}
      watch={languaje.watch }
      projectname2={languaje.projectname2}
      projectdescription2={languaje.projectdescription2}
      />
      <Footer/>
    </div>
  );
}

export default App;
