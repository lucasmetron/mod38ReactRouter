import React from 'react'
import { data } from '../Data';

function Aulas() {
    return (

        <div className='center'>
            <h1>Aulas</h1>
            <ul className='aulas'>
                {data.map(aula =>
                    <li key={aula.id}>{aula.title}</li>)}
            </ul>
        </div>

    );
}

export default Aulas;