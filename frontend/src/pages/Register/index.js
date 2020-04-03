import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logoImg.svg';


export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp,
            city, 
            uf,
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
        } catch(err){
            alert('Erro no cadastro, tente novamnete!');
        }
    }
    return (
        <div className='register-container'>
        <div className='content'>
            <section>
                <img src={logoImg} alt='The Hero' />

                <h1>Cadastro</h1>
                <p> Faça seu Cadastro, entre na plataforma
                    e ajude pessoas a encotrarem os casos da sia ONG
                </p>

                <Link className='back-link' to='/'>
                    <FiArrowLeft sixe={16} color="#E02041"/>
                    Não Tenho Cadastro
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsApp(e.target.value)}
                    />

                <div className="input-group">
                    <input 
                    placeholder="Cidade" 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    />
                    <input 
                    placeholder="UF" 
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    
                    style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>

        </div>
    );
}