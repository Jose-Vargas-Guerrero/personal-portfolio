import React from 'react';
import './trabajos.css';
import weblink from './images/web-link.jpg';
import weblink2 from './images/pagina.JPG';

function Trabajos() {
    return (
        <div className="container-fluid" id="trabajos">
            <div className="row">
                <div className="col" id="weblink-info">
                    <h3 className="informacion-title">Travxls</h3>
                    <p className="informacion-text">Web SPA (single page application) sobre una agencia de renta de coches.</p>
                    <a href="https://jose-vargas-guerrero.github.io/web-portfolio/" className="travxls-link" target="_blank" rel="noreferrer">mirar proyecto</a>
                    <a href="https://github.com/Jose-Vargas-Guerrero/web-portfolio" className="travxls-link" target="_blank" rel="noreferrer"><i className="codigo fab fa-github"></i></a>
                </div>
                <div className="col" id="weblink">
                    <img src={weblink} className="travxls-img" alt="Travxls" height="200px"/>
                </div>
            </div>
            <div className="row">
                <div className="col" id="weblink-info">
                    <h3 className="informacion-title">Landing Page</h3>
                    <p className="informacion-text">Una landing page con un menu desplegable hecho en react con Hooks</p>
                    <a href="https://jose-vargas-guerrero.github.io/Landing-page//" className="travxls-link" target="_blank" rel="noreferrer">mirar proyecto</a>
                    <a href="https://github.com/Jose-Vargas-Guerrero/Landing-page" className="travxls-link" target="_blank" rel="noreferrer"><i className="codigo fab fa-github"></i></a>
                </div>
                <div className="col" id="weblink">
                    <img src={weblink2} className="travxls-img" alt="Segundo trabajo" height="200px"/>
                </div>
            </div>
            
        </div>
    )
}   
    
export default Trabajos