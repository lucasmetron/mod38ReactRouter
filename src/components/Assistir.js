import React, { useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';


export default function Assistir(props) {

    const query = useLocation().search.slice(1);

    useEffect(() => {
        console.log(query)

    })

    return (
        <div className="center">
            <iframe width="727" height="409" src={`https://www.youtube.com/embed/${query}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}