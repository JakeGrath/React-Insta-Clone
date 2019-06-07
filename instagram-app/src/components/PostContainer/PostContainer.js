import React from 'react';
// import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer'
import styled from 'styled-components'

const StyledPostContainer = styled.div`
    width: 604px;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 5% 20%;
`

const StyledPostHeader = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: flex-start;
`

const StyledPostThumbnail = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 22px;
    margin: 10px;
`
const StyledPostUser = styled.p`
    font-weight: 200;
    font-size: 1.2rem;
    padding: 0 20px;
`

const StyledPostImg = styled.img`
width: 604px;
`

const PostContainer = (props) => {
    return (
        props.posts.map(prop =>
            <StyledPostContainer>
                <StyledPostHeader>
                    <StyledPostThumbnail src={prop.thumbnailUrl} alt='thumbnail' />
                    <StyledPostUser>{prop.username}</StyledPostUser>
                </StyledPostHeader>
                <StyledPostImg src={prop.imageUrl} alt='image' />
                <CommentContainer comments={prop.comments} likes={prop.likes} />
            </StyledPostContainer>
        )
    )
}

export default PostContainer;