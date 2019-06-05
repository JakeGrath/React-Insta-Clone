import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <LoginComponent />
      </div>
    );
  }
}

const LoginComponent = withAuthenticate(PostsPage)(Login);

export default App;
