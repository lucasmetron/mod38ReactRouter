import React, { useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { data } from '../Data';

function Aula() {

    const match = useRouteMatch();
    const id = parseInt(match.params.id); //pegando o id pela hooks useRouteMAtch()

    const location = useLocation(); //também é possivel pegar a url por este hooks

    const params = useParams() //Mais utilizado pq ele ja traz o parametro direto


    useEffect(() => {
        console.log(match);
        console.log(location);
        console.log(params)
    })


    return (
        <div className='center'>
            <h1>{data[params.id].title}</h1>
            <h3>{data[params.id].desc}</h3>
        </div>

    );
}

export default Aula;