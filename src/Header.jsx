
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><Link to="/task1">task1</Link></li>
                    <li><Link to="/task2">task2</Link></li>
                    <li><Link to="/task3">task3</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


