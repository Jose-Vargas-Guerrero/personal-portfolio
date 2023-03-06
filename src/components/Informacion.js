import React from 'react';
import './informacion.css';
import foto from './images/foto.jpg';

function Informacion({name,description}) {
    return (
        <div className="container-fluid" id="informacion-container">
            <div className="row">
                <div className="col" id="col-imagen">
                    <img src={foto} className="imagen" alt="foto" height="333px"/>
                </div>
                <div className="col" id="col-texto">
                    <h1 className="nombre">{name}</h1>
                    <p className="texto">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Informacion
