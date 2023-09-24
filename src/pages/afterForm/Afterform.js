import React from 'react';
import{Link} from "react-router-dom";
import './after.css'


const Afterform = () => {
    return (
        <div className="contenu__form">
            <div className="texte">
            <h3>Votre pré-adhésion a été prise en compte. Merci pour votre confiance l'équipe AC2L vous contact très vite :)</h3>
            </div>
            <div className="btn"><Link to = "/" className='btn'>Retour à l'accueil</Link> </div>
        </div>
    );
};

export default Afterform;