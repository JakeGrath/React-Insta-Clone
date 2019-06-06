import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import loginImg from '../../assets/adventure-attraction-blurry-618545.jpg';
import styled from 'styled-components';

const StyledLoginPage = styled.div`
    text-align: center;
    max-width: 1200px;
    margin: 0 20%;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 4px;
`

const StyledInputBox = styled.input`
    margin: 20px;
    background-color: rgb(244,244,244);
    border-radius: 4px;
    border: none;
`

const StyledLoginButton = styled.button`
    width: 200px;
    height: 75px;
    background: rgb(244,244,244);
    border: 1px solid rgb(55,55,55);
    border-radius: 5px;
    margin-bottom: 20px;
`

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const cust = this.state.username;
    sessionStorage.setItem('user', cust);
    window.location.reload();
};

  render() {
    return (
        <StyledLoginPage>
        <SearchBar />
      <form>
        <img src={loginImg} alt='Login Image' width='604px' height='auto'/>
        <div>Please Log in to continue.</div>
          <StyledInputBox
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <StyledInputBox
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <StyledLoginButton onClick={this.handleLoginSubmit}>
            Log In
          </StyledLoginButton>
      </form>
      </StyledLoginPage>
    );
  }
}

export default Login;