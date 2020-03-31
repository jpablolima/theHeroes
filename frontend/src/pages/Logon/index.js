import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroesImg.png';
import logoImg from '../../assets/logoImg.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="The Hero"></img>

            <form>
                <h1> Faça seu Logon</h1>

                <input placeholder="Sua ID" />
                <button tye="submit">Entrar</button>
                <a href="/register">
                    <FiLogIn size={16} color="E02041"/>    
                </a>    
            </form>    
            </section>

        <img src={heroesImg} alt="Heroes"/>
        </div>
    );

}