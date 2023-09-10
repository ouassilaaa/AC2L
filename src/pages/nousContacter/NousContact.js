import React from 'react';
// import ContactImage from '../../images/contact.jpg'
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
// import Header from '../../components/Header';

import './contact.css'



const NousContact = () => {
    return (
        <>
        {/* <Header title="Contact nous" image ={ContactImage}>
            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.

        </Header> */}
        <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="mailto:ac2l.31000@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
                    <a href="http://m.me/" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
                    <a href="https://wa.me/+336" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
                </div>
            </div>

        </section>
        </>
    );
};

export default NousContact;