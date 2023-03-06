import React from 'react';
import './trabajos.css';
import weblink from './images/web-link.jpg';
import weblink2 from './images/pagina.JPG';

function Trabajos({projectname,projectdescription,watch,projectname2,projectdescription2}) {
    return (
        <div className="container-fluid" id="trabajos">
            <div className="row">
                <div className="col" id="weblink-info">
                    <h3 className="informacion-title">{projectname}</h3>
                    <p className="informacion-text">{projectdescription}</p>
                    <a href="https://jose-vargas-guerrero.github.io/web-portfolio/" className="travxls-link" target="_blank" rel="noreferrer">{watch}</a>
                    <a href="https://github.com/Jose-Vargas-Guerrero/web-portfolio" className="travxls-link" target="_blank" rel="noreferrer"><i className="codigo fab fa-github"></i></a>
                </div>
                <div className="col" id="weblink">
                    <img src={weblink} className="travxls-img" alt="Travxls" height="200px"/>
                </div>
            </div>
            <div className="row">
                <div className="col" id="weblink-info">
                    <h3 className="informacion-title">{projectname2}</h3>
                    <p className="informacion-text">{projectdescription2}</p>
                    <a href="https://jose-vargas-guerrero.github.io/Landing-page//" className="travxls-link" target="_blank" rel="noreferrer">{watch}</a>
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