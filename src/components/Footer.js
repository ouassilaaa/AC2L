import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import Logo from "../images/logoremove.png";


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to ="/" className='logo'>
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                    Retrouvez nous sur les différents réseaux sociaux <br/> pour suivre notre actualité.
                    </p>
                    <div className="footer__socials">
                        <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'> <FaFacebook/> 
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'> <AiFillInstagram/> 
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'> <AiOutlineTwitter/> 
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Liens utiles </h4>
                    <Link to ="/activites">Nos activités</Link>
                    <Link to ="/valeurs">Nos valeurs</Link>
                    <Link to ="/blog">Blog</Link>
                    <Link to ="/inscription">Inscription</Link>
                </article>
                <article>
                    <h4>Contacts</h4>
                    <Link to ="/contact">Nous contacter</Link>
                    <Link to ="/s">Support</Link>
                    
                </article>
            </div>
                
            <div className="footer__copyright">
                <small>2023 OUASSILA MESSAOUI &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;