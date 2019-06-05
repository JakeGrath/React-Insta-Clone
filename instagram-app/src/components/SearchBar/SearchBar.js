import React from 'react';
import './SearchBar.css'
import iglogo from '../../assets/iglogo.png'

const signOut = e =>{
    sessionStorage.removeItem('user');
    window.location.reload();
}

const SearchBar = props => {
    return (
        <div className='searchbar-container'>
        <img className='logo-img' src={iglogo} alt='Instagram'/>
        <i className="fab fa-instagram"></i>
        <div>
        <input type="text" className='search-bar' placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
        <div className='icons'>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            <i class="fas fa-sign-out-alt" onClick={signOut}></i>
        </div>
        </div>
    )
}

export default SearchBar;