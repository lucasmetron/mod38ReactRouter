import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

function Nav() {

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