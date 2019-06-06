import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComment = styled.div`
    text-align: left;
    margin-left: 10px;
    padding: 5px 0;
`

const StyledUser = styled.span`
font-weight: bold;
`

const Comment = props => {
  return (
    <StyledComment>
      <StyledUser>{props.comment.username}-</StyledUser>{' '}
      <span>{props.comment.text}</span>
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;