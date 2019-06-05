import React from 'react';
import CommentsContainer from '../CommentSection/CommentsContainer';
import PostsHeader from './PostsHeader';

import './Posts.css';

const Posts = props => {
  return (
    <div className="post-border">
      <PostsHeader
        username={props.posts.username}
        thumbnailUrl={props.posts.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.posts.imageUrl}
        />
      </div>
      <CommentsContainer comments={props.posts.comments} />
    </div>
  );
};

export default Posts;