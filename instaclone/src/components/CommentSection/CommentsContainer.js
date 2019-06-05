import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import CommentsInput from './CommentsInput';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comments key={i} comment={c} />)}
        <CommentsInput />
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentsContainer;