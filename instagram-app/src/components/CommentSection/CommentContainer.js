import React from 'react';
import Comment from './Comment'
import './CommentContainer.css'
import CommentInput from './CommentInput';
import PropTypes from 'prop-types'

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

componentWillReceiveProps(newProps) {
    if (this.props.comments !== newProps.comments){
        this.setState ({
            comments: newProps.comments
        })
    }
}

    commentHandler = e => {
        this.setState({
            comment: e.target.value
        })
    }

    commentSubmit = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.comment,
            username: 'Jake'
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: ''
        })

    }

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.commentSubmit}
                    changeComment={this.commentHandler}
                />
            </div>
        );
    }
}

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};


export default CommentContainer;

