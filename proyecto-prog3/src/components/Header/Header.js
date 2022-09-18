import React from 'react'
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <nav className='header'>
            <Link to={'/'}>
                <img className="logo" src="./img/logo.png" alt="" />
            </Link>
            
            <ul className="main-nav">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favoritos'>Favoritos</Link>
                </li>
                <li>
                    <Link to='/TodasPopulares'>Populares</Link>
                </li>
                <li>
                    <Link to='/TodasCartelera'>En cartelera</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header