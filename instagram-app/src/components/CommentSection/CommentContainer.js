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
            comment: '',
            likes: props.likes
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

    handleLike = e => {
        const likes = this.state.likes + 1
        this.setState({
            likes : likes
        })
    }

    render() {
        return (
            <div>
            <div className='post-container-icons'><i className="far fa-heart" onClick={this.handleLike}></i> <i className="far fa-comment"></i></div>
                <div className='post-container-icons'>{this.state.likes}</div>
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

