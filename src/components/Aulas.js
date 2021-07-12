import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { data } from '../Data';

function Aulas() {
    const match = useRouteMatch();

    useEffect(() => {
        console.log(match)
    })


    return (

        <div className='center'>
            <h1>Aulas</h1>
            <ul className='aulas'>
                {data.map(aula =>
                    <li key={aula.id}><Link className='link' to={`${match.url}/${aula.id}`} >{aula.title}</Link></li>)}
            </ul>
        </div>

    );
}

export default Aulas;