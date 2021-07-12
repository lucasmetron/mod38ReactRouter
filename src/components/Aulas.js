import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { data } from '../Data';

function Aulas() {
    const match = useRouteMatch();
    const [url, setUrl] = useState('')

    useEffect(() => {
        const newUrl = match.url.slice(-1) === '/' ? match.url : match.url + '/';
        setUrl(newUrl);
    }, [match])


    return (

        <div className='center'>
            <h1>Aulas</h1>
            <ul className='aulas'>
                {data.map(aula =>
                    <li key={aula.id}><Link className='link' to={`${url}${aula.id}`} >{aula.title}</Link></li>)}
            </ul>
        </div>

    );
}

export default Aulas;