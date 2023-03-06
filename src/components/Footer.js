import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <div className="servicios">
                <h5>Services</h5>
                <p className="servicio">Sitios Web</p>
                <p className="servicio">Web App</p>
                <p className="servicio">Design</p>
            </div>
            <div className="contacto">
            <h5 className="espacio">Contact</h5>
            <a href="https://www.instagram.com/josevargas3117/" target="_blank" rel="noreferrer" className="instagram">Instagram</a>
            <a href="mailto:josevgdesarrollador@gmail.com" className="correo">Email</a>
            </div>
        </div>
        
    )
}

export default Footer
