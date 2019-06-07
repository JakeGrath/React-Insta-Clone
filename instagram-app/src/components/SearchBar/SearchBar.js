import React from 'react';
import iglogo from '../../assets/iglogo.png'
import styled from 'styled-components'

const StyledNavContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 22px;
`;

const LogoImg = styled.img`
height: 100%;
`
const StyledNavIcons = styled.div`
    display: flex;
    width: 120px;
    justify-content: space-evenly;
`

const StyledSearch = styled.input`
    background-color: rgb(244,244,244);
    border-radius: 4px;
    border: none;
    width: 300px;
`;

const signOut = e =>{
    sessionStorage.removeItem('user');
    window.location.reload();
}

const SearchBar = props => {
    return (
        <StyledNavContainer>
        <LogoImg src={iglogo} alt='Instagram'/>
        <i className="fab fa-instagram"></i>
        <StyledSearch type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        <StyledNavIcons>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            <i class="fas fa-sign-out-alt" onClick={signOut}></i>
        </StyledNavIcons>
        </StyledNavContainer>
    )
}

export default SearchBar;