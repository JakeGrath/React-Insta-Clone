import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './LoginPage.css'
import loginImg from '../../assets/adventure-attraction-blurry-618545.jpg'

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
        <div className='login-page'>
        <SearchBar />
      <form className="login">
        <img src={loginImg} alt='Login Image' width='604px' height='auto'/>
        <div>Please Log in to continue.</div>
          <input
          className='input-box'
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input
          className='input-box'
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <button onClick={this.handleLoginSubmit}>
            Log In
          </button>
      </form>
      </div>
    );
  }
}

export default Login;