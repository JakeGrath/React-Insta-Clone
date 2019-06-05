import React from 'react';
import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer'


const PostContainer = (props) => {
    return (
        props.posts.map(prop =>
            <div className='post-container'>
                <div className='post-container-header'>
                    <img className='post-container-thumbnail' src={prop.thumbnailUrl} alt='thumbnail'></img>
                    <p className='post-container-username'>{prop.username}</p>
                </div>
                <img className='post-continer-image' src={prop.imageUrl} alt='image' width='604px' />
                <CommentContainer comments={prop.comments} likes={prop.likes}/>
                {prop.comments.forEach(log => {console.log(log)})}
            </div>
        )
    )
}

export default PostContainer;