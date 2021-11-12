import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Pet Shelter</h1>
            <nav className="nav">
                <Link className="nav-link" to="/">home</Link>
                <Link className="nav-link" to="/pets/new">add a pet to the shelter</Link>
            </nav>
            <hr />
        </div>
    );
};


export default Header;