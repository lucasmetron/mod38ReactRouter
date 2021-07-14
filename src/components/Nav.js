import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

function Nav() {

    const login = useSelector(state => state)

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        let { from } = location.state || { from: { pathname: "/" } }
        if (login) {
            history.replace(from)
        }
        console.log(history)
        console.log(location)
    }, [login])

    return (
        <div className="navBar">
            <p>ProgBr</p>
            <div className="divRoute">
                <AuthButton></AuthButton>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/aulas'>Aulas</Link></p>
                <p><Link to='/sobre'>Sobre</Link></p>
                <p><Link to='/asdasdsa'>Indefinido</Link></p>
            </div>
        </div>
    );
}

export default Nav;