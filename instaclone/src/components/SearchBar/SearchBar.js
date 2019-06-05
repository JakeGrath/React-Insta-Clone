import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        Instagram logo
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          social
        </div>
        <div className="social">
          heart
        </div>
        <div className="social">
          circle
        </div>
      </div>
    </div>
  );
};

export default SearchBar;