import './navbar.css'; 
import{Link, NavLink} from "react-router-dom";
import {LiaBarsSolid} from "react-icons/lia";

const navbar = () => {
    return (
        <nav>
        {/*  configurer la navigation des differentes pages avec NavLink to */}
        <div className="container nav__container">
            <Link to="/" className='logo'>
            <img src="logoremove.png" alt="Nav Logo"  />
            </Link>

            <ul className='nav__links'>
                <NavLink to ="/" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to ="/blog" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Blog</li>
                </NavLink>
                <NavLink to ="/contact" className={({isActive})=>isActive? 'active-nav':''}>
                    <li>Contact</li>
                </NavLink>
            </ul>

            <button className="nav__toggle-btn">
                <LiaBarsSolid/>
            </button>
        </div>

        </nav>
    );
};

export default navbar;