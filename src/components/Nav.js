import React from 'react';

function Nav() {

    return (
        <div className="navBar">
            <p>ProgBr</p>
            <div className="divRoute">
                <a href="./">Home</a>
                <a href="./aulas">Aulas</a>
                <a href="./sobre">Sobre</a>
                <a href="./asdasd">Inexistente</a>
            </div>
        </div>
    );
}

export default Nav;