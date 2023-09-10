import React from 'react';
import Image from "../images/team.jpg";
import {GiCutDiamond} from 'react-icons/gi'
import SectionType from './SectionType';
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
                    <SectionType icon={<GiCutDiamond/>} title="Valeurs"/>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    </p>
                    <div className="values__wrapper">
                    {
                    values.map(({ id,icon,title,desc})=>
                    {
                        return (
                            <Card className="values__value" key={id}>
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