import React from 'react';
import './SearchBar.css'
import iglogo from '../../assets/iglogo.png'

const SearchBar = () => {
    return (
        <div className='searchbar-container'>
        <img className='logo-img' src={iglogo} alt='Instagram'/>
        <i className="fab fa-instagram"></i>
        <div>
        <input className='search-bar' type="text" placeholder="Search" />
        </div>
        <div className='icons'>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </div>
        </div>
    )
}

export default SearchBar;