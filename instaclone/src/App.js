import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar';
import PostsContainer from './components/PostContainer/Posts';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

