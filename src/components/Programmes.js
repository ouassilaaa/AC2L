import React from 'react';
import {FcSportsMode} from 'react-icons/fc'
import SectionActivites from './SectionActivites';
import {programs} from'../data';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

const Programmes = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionActivites icon={<FcSportsMode/>} title=" Nos Activités"/>

            <div className="programs__wrapper">
                {
                    programs.map(({ id,icon,title,info})=>
                    {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to = "/inscription" className='btn sm'>S'inscrire</Link>

                            </Card>
                        )

                    })
                }

                </div>
            </div>
    
        </section>
    );
};

export default Programmes;