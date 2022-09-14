import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

function Header(props) {
    return (
        <nav className='header'>
            <Link to={'/'}>
                <img className="logo" src="./img/logo.png" alt="" />
            </Link>
            <Search />
            <ul className="main-nav">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favoritos'>Favoritos</Link>
                </li>
                <li>
                    <Link to='/peliculas'>Películas</Link>
                </li>
                <li>
                    <Link to='/series'>Series</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header