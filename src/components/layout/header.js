import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>Todo List</h1>
            <Link to="/" className="linkStyle">Todos</Link> | <Link to="/about" className="linkStyle">About</Link>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: '#333333',
    color: '#ffffff',
    padding: '1rem'
};

export default Header;