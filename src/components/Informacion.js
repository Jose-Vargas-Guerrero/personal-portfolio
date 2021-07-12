import React from 'react';
import './informacion.css';
import foto from './images/foto.jpg';

function Informacion() {
    return (
        <div className="container-fluid" id="informacion-container">
            <div className="row">
                <div className="col" id="col-imagen">
                    <img src={foto} className="imagen" alt="foto" height="333px"/>
                </div>
                <div className="col" id="col-texto">
                    <h1 className="nombre">José Vargas</h1>
                    <p className="texto">Desarrollador web con la meta de trabajar en lo que me apasiona, centrado en superarme cada vez más con el pasar del tiempo, usando tecnologías modernas y diseños minimalistas para lograr una vista atractiva para el usuario.</p>
                </div>
            </div>
        </div>
    )
}

export default Informacion
