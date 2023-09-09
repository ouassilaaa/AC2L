import React from 'react';
import {Link} from 'react-router-dom';
import Image from "../images/basket.png"

const Header = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4> #BienvenueDansLaTeamAC2L</h4>
                    <h1>Rejoins Notre Equipe Sportive</h1>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </p>
                    <Link to = "/inscription" className='btn lg'>Adhésion AC2L</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle">                    </div>

                        <div className="main__header-image">
                            <img src={Image} alt="Image Fond" />
                        </div>
                </div>
            </div>
        </header>
    );
};

export default Header;