import React from 'react';
import Image from "../images/valeurs.jpg";
import {GiCutDiamond} from 'react-icons/gi'
import SectionActivites from './SectionActivites';
import {values} from '../data';
import Card from '../UI/Card';

const Valeurs = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Cohésion" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionActivites icon={GiCutDiamond} title="Valeurs"/>
                    <p>
                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.

                    </p>
                    <div className="values__wrapper">
                    {
                    values.map(({ id,icon,title,desc})=>
                    {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                                

                            </Card>
                        )

                    })
                }
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Valeurs;