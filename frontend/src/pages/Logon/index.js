import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api  from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroesImg.png';
import logoImg from '../../assets/logoImg.svg';

export default function Logon(){

    const[id, setId] = useState('');
    
   async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id })
            console.log(response.data.name);

        }catch(err){
            alert('Falha no logion, tente novamente.')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="The Hero"></img>

            <form onSubmit={handleLogin}>
                <h1> Faça seu Logon</h1>

                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
                <Link className = "back-link"to="/register">
                    <FiLogIn size={16} color="E02041"/>    
                    Não tenho cadastro
                </ Link>    
            </form>    
            </section>

        <img src={heroesImg} alt="Heroes"/>
        </div>
    );

}