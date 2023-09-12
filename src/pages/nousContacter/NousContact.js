import React from 'react';
import ContactImage from '../../images/Boxing_Glove.jpg'
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
// import Header from '../../components/Header';

import './contact.css'



const NousContact = () => {
    return (
        
        
        <section className="contact">
            <div className="container contact__container">
                <div className="contact_left">
                    <h2>Restons en contact ! </h2>
                    <p>
                        Pour toutes demandes ou suppléments d'information vous pouvez nos contacts sous différents moyens. A très vite !
                    </p>
                    <div className="contact__image">
                        <img src={ContactImage} alt="Cohésion" />
                    </div>
                </div>
            


                <div className="contact__right">
                    <div className="contact__wrapper">
                    <a href="mailto:ac2l.31000@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
                    <a href="http://m.me/" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
                    <a href="https://wa.me/+336" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
                </div>
            </div>
        </div>

        </section>
        
    );
};

export default NousContact;