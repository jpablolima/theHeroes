import React, { useState }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logoImg.svg';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescripption] = useState('');
    const [value, setValue] = useState('');
    
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
       async function  handleNewIncident(e){
            e.preventDefault();

            const data  = {
                title,
                description,
                value,
            };
            try {
                await api.post('incidents', data, {
                    headers: {
                        Authorization: ongId,
                    }
                })
                history.push('/profile');
            }catch (err) {
                alert('Erro ao cadastrar caso, tente novamente!')
            }
        }

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

        <form onSubmit={handleNewIncident}>
            <input
                 placeholder="Título do caso"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 />
            <textarea
                 placeholder="Descição"
                 value={description}
                 onChange={e => setDescripption(e.target.value)}
                 />
            <input
                 placeholder="Valor em Reais"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  />
            
            
            <input placeholder="UF" style={{width:80}}/>
            <button className="button" type="submit">Cadastrar</button>

        </form>
        </div>
    </div>
    );
}
