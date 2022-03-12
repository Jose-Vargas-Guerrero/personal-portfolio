import React from 'react';
import './habilidades.css';



function Habilidades() {
    return (
        <>
        <div className="container-fluid" id="habilidades-container">
            <div className="banner">
                <h1 className="banner-title">Habilidades</h1>
            </div>
            <div className="habilidades">
                    <div className="frontend">
                        <h1 className="habilidades-titulo">Frontend</h1>
                            <i className="fab fa-html5 habilidad"></i>
                            <i className="fab fa-css3-alt habilidad"></i>
                            <i className="fab fa-js habilidad"></i>
                    </div>
                    <div className="complementos">
                        <h1 className="habilidades-titulo">Librerias y Frameworks</h1>
                            <i class="fab fa-bootstrap habilidad"></i>
                            <i class="fab fa-react habilidad"></i>
                    </div>
                     <div className="general">
                        <h1 className="habilidades-titulo">Complementos</h1>
                            <i class="fab fa-npm habilidad"></i>
                            <i class="fab fa-git habilidad"></i>
                            <i class="fab fa-github habilidad"></i>
                    </div>
            </div>
            {/* descripcion de mi trabajo */}
            <div className="container descripcion">
                    <div className="websites">
                        <h2 className="website-title">Sitios web  y mas</h2>
                            <p className="website-text">Ya sea un Sitio Web para elevar el renombre de tu marca,
                            o hasta algo más complejo como un E-Commerce o Web App, todo puede ser creado con
                            un diseño y desarrollo adecuado.</p>
                    </div>
                    <div className="tienda-app">
                        <h2 className="tienda-title">Marketing Digital</h2>
                            <p className="tienda-text">Es importante que tu sitio capture el trafico de visitas, con
                            estrategias como tener un buen posicionamiento SEO, utilizar herramientas de publicidad,
                            o implementar secciones dinámicas en el sitio web como un chat de ayuda.</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Habilidades
