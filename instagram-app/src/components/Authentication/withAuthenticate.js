import React from 'react';

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!sessionStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (sessionStorage.getItem('user')) return <PostsPage />;
      return <Login />;
    }
  };


export default withAuthenticate;