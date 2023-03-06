import React from 'react';
import './habilidades.css';



function Habilidades({habilities,libraries,complements, webs,webslogan,marketing,marketingslogan}) {
    return (
        <>
        <div className="container-fluid" id="habilidades-container">
            <div className="banner">
                <h1 className="banner-title">{habilities}</h1>
            </div>
            <div className="habilidades">
                    <div className="frontend">
                        <h1 className="habilidades-titulo">Frontend</h1>
                            <i className="fab fa-html5 habilidad"></i>
                            <i className="fab fa-css3-alt habilidad"></i>
                            <i className="fab fa-js habilidad"></i>
                    </div>
                    <div className="complementos">
                        <h1 className="habilidades-titulo">{libraries}</h1>
                            <i class="fab fa-bootstrap habilidad"></i>
                            <i class="fab fa-react habilidad"></i>
                    </div>
                     <div className="general">
                        <h1 className="habilidades-titulo">{complements}</h1>
                            <i class="fab fa-npm habilidad"></i>
                            <i class="fab fa-git habilidad"></i>
                            <i class="fab fa-github habilidad"></i>
                    </div>
            </div>
            {/* descripcion de mi trabajo */}
            <div className="container descripcion">
                    <div className="websites">
                        <h2 className="website-title">{webs}</h2>
                            <p className="website-text">{webslogan}</p>
                    </div>
                    <div className="tienda-app">
                        <h2 className="tienda-title">{marketing}</h2>
                            <p className="tienda-text">{marketingslogan}</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Habilidades
