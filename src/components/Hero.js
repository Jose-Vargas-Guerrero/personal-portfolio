import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';

function Hero() {

    /* animaciones de destellos */

    const Destello1 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.7, scale: 1,
            transition: { delay: 3, duration: 2.5, yoyo: Infinity }
        }
    }

    const Destello2 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.7, scale: 1,
            transition: { delay: 5, duration: 3, yoyo: Infinity }
        }
    }

    const Destello3 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.7, scale: 1,
            transition: { delay: 7, duration: 2, yoyo: Infinity }
        }
    }

    const Destello4 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.7, scale: 1,
            transition: { delay: 9, duration: 2, yoyo: Infinity }
        }
    }

    return (
        <div className="container-fluid" id="hero-container">
            {/* destello parte izquierda */}
            <motion.div className="rounded-circle destello1" variants={Destello1} initial="hidden" animate="visible"></motion.div>
            <motion.div className="rounded-circle destello2" variants={Destello2} initial="hidden" animate="visible"></motion.div>
            {/* destello parte derecha */}
            <motion.div className="rounded-circle destello3" variants={Destello3} initial="hidden" animate="visible"></motion.div>
            <motion.div className="rounded-circle destello4" variants={Destello4} initial="hidden" animate="visible"></motion.div>

            {/* contenido */}
            <h1 className="hero-title">Desarrollador Web</h1>
            <p className="hero-text">Un buen espacio en la web te garantiza mejoras para tu marca</p>
            <a href="#informacion-container" className="hero-link">Descubre</a>

            {/* destello */}
            <motion.div className="rounded-circle destello5" variants={Destello3} initial="hidden" animate="visible"></motion.div>
            <motion.div className="rounded-circle destello6" variants={Destello1} initial="hidden" animate="visible"></motion.div>
            <motion.i className="fas fa-arrow-down rounded-circle" id="destello7" variants={Destello2} initial="hidden" animate="visible"></motion.i>
            <motion.div className="rounded-circle destello8" variants={Destello4} initial="hidden" animate="visible"></motion.div>
        </div>
    )
}

export default Hero
