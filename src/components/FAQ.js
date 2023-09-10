// logique pour le retour de chaque itération du tableau data pour les faqs
//logique pour cacher ou faire apparaître la réponse
import { useState } from 'react';
import React from 'react';
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'

const FAQ = ({question,answer}) => {

    const[isAnswerShowing, setIsAnswerShowing] = useState(false); 

    return (

        // toggle le btn
        <article className="faq" onClick={()=> setIsAnswerShowing(prev=> !prev)}>
            <div>
                <h4>{question}</h4>
                    <button className="faq__icon">
                        {/* si la réponse est sortie on met l'icone moins sinon icone plus */}
                      {
                        isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                      }  
                    </button>          
            </div>

            {isAnswerShowing && <p>{answer}</p> }
        </article>
    );
};

export default FAQ;