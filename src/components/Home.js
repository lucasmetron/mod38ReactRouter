import React from 'react';
import { useSelector } from 'react-redux';

function Home() {

    const state = useSelector(state => state)



    return (
        <div className='center'>
            <h1>Olá! Essa é a pagina Pricipal</h1>
            <p>{`Estado do loggin é ${state}`}</p>
        </div>

    );
}

export default Home;