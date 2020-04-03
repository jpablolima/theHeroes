import React  from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logoImg.svg';

export default function NewIncident(){
    return (
        <div className='new-incident-container'>
        <div className="content">
        <section>
            <img src={logoImg} alt='The Hero' />

            <h1>Cadastrar novo caso</h1>
            <p> Descreva o caso detalhadamente para encontrar
                um herói. 
            </p>

            <Link className='back-link' to='/profile'>
                <FiArrowLeft sixe={16} color="#E02041"/>
                Voltar para home
            </Link>
        </section>

        <form>
            <input placeholder="Título do caso"/>
            <textarea placeholder="Descição"/>
            

            <input placeholder="Valor em Reais" />
            <input placeholder="UF" style={{width:80}}/>

            <button className="button" type="submit">Cadastrar</button>

        </form>
        </div>
    </div>
    );
}
