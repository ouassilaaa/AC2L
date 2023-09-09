import './navbar.css'; 
import React, {useState } from 'react';
import{Link, NavLink} from "react-router-dom";
import {LiaBarsSolid} from "react-icons/lia";
import {MdOutlineClose} from "react-icons/md";
import Image from "../images/logoremove.png";

const Navbar = () => {

    // permettre toggle de disparaitre 
    const[isNavShowing,setIsNavShowing]= useState(false);

    return (
        <nav>
        {/*  configurer la navigation des differentes pages avec NavLink to */}
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={()=> setIsNavShowing(false)}>
            <img src={Image} alt="Nav Logo Image"  />
            </Link>
             
             {/* permettre menu d'apparaitre (petits moyens écrans) */}
            <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>


                <NavLink to ="/" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to ="/activites" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Nos activités</li>
                </NavLink>
                <NavLink to ="/engagements" className={({isActive})=>isActive? 'active-nav':''}
                // fermer le menu une fois la page cliquée 
                onClick={()=> setIsNavShowing(prev => !prev)}>
                    <li>Notre Engagement</li>
                </NavLink>
                <NavLink to ="/blog" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Blog</li>
                </NavLink>
                <NavLink to ="/contact" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Nous contacter</li>
                </NavLink>
                <NavLink to ="/inscription" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Inscription</li>
                </NavLink>
            </ul>

            {/* permettre au menu de toggle */}
            <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
                {
                // si la barre est ouverte on remplace par la croix    
                isNavShowing ? <MdOutlineClose/> : <LiaBarsSolid/>
                }
                
            </button>
        </div>

        </nav>
    );
};

export default Navbar;