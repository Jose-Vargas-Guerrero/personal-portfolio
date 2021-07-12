import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <div className="servicios">
                <h5>Servicios</h5>
                <p className="servicio">Sitios Web</p>
                <p className="servicio">Web App</p>
                <p className="servicio">E-Commerce</p>
            </div>
            <div className="contacto">
            <h5>Contacto</h5>
            <a href="https://www.instagram.com/josevargas3117/" target="_blank" rel="noreferrer" className="instagram">instagram</a>
            <a href="mailto:josevgdesarrollador@gmail.com" className="correo">josevgdesarrollador@gmail.com</a>
            </div>
        </div>
        
    )
}

export default Footer
