import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    function handleClick() {
        history.push('/login');
    }
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <button onClick={() => handleClick()}>Войти</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
