import React from 'react';
import {faqs} from'../data';
import {RiQuestionnaireFill} from 'react-icons/ri'
import SectionType from './SectionType';
import Card from '../UI/Card';
import FAQ from './FAQ';

const FAQs = () => {
    return (
        <div>
           <section className="faqs">
                <div className="faqs__container">
                    <SectionType icon={<RiQuestionnaireFill/>} title="FAQ"/>
                    <div className="faqs__wrapper">
                        {
                            faqs.map(({id, question,answer})=>
                            {

                                return <FAQ key={id} question={question} answer={answer}/>
                            })
                        }
                    </div>
                </div>
                <p>
                    
                </p>
            </section> 
        </div>
    );
};

export default FAQs;