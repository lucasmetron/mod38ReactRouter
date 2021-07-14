import React from 'react';
import { Link } from 'react-router-dom';


export default function Negado() {
    return (
        <div className='center'>
            <h1>Acesso negado!</h1>
            <Link to='/'><button>Voltar</button></Link>


        </div>
    );
}