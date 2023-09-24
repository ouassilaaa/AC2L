import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Card from '../UI/Card';
import {GrContact} from 'react-icons/gr'



const Inscription = () => {

  //permettra la redirection vers la page souhaitée
const Navigate= useNavigate();

//déclaration de nos variables d'état pour le formulmaire
const [name,setName] = useState('');
const [surname,setSurname] = useState('');
const [mobile,setMobile] = useState('');
const [email,setEmail] = useState('');
const [note,setNote] = useState('');
 
const handleSubmit = () => {
    //erreur si formulaire vide
    if(name.length === 0){
      alert("Veuillez renseigner votre nom");
    }
    else if(mobile.length === 0){
      alert("Veuillez renseigner un numéro de téléphone");
    }
    else if(email.length === 0){
      alert("Veuillez renseigner une adresse mail si nous n'arrivons pas à vous joindre par téléphone ");
    }
    else{
      //récupération de nos datas
      const url = 'http://localhost/api/index.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('surname', surname);
      fData.append('mobile', mobile);
      fData.append('email', email);
      fData.append('note', note);
      axios.post(url, fData).then(response=> (response.data)).catch(error=> (error));
      Navigate('/after'); 

      
    }
  }
 

    return (
        <div className="main__container">
            <Card className="form__container">
            <h3>Formulaire de contact  {<GrContact/>} </h3>               
            <p>Une activité vous intéresse et vous souhaitez avoir plus d'informations pour vous inscrire ? 
                     Rien de plus simple, remplissez à ce formulaire et nous vous contacterons dans les plus brefs délais. </p>
              <div className="form">
                <form action="" method='POST'>                
                    <input type="text" name="name" placeholder='Prénom' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Nom' name="surname" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />                
                    <input type="text" placeholder='Numéro de téléphone' name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <input type="email" placeholder='Email' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />     
                    <textarea name="note" id="note"placeholder="Avez_vous des problèmes de santé connus? "value={note} onChange={(e) => setNote(e.target.value)} ></textarea>
                    <input type="button" className="btn " name="submit" id="submit" value="Envoyer" onClick={handleSubmit} />
                  
                </form>
                </div>
            
            </Card>
            <div className="img__container">

            </div>

        </div>
    );
};

export default Inscription;