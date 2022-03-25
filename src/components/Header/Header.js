import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container d-flex justify-content-between px-4 '>
            <p>Food Heaven</p>
            <nav className='nav-items'>
                <a className='' href="/home">Home</a>
                <a className='' href="/foods">Foods</a>
                <a className='' href="/order">Order</a>
                <a className="" href="/about">About</a></nav>
        </div>
    );
};

export default Header;