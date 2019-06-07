import React from 'react';
import styled from 'styled-components';

const StyledCommentInput = styled.input`
    width: 90%;
    background-color: rgb(244,244,244);
    border-radius: 4px;
    border: 1px solid rgb(50,50,50);
    margin-bottom: 10px;
`

const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
            <StyledCommentInput
                className='comment-input'
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={props.changeComment}
            />
        </form>
    );
};

export default CommentInput;