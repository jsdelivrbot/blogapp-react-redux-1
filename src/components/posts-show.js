import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
      // this.props.match.params.id;  // provided by react router
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => this.props.history.push('/')); //redirect back to main page after delete
  }

  render() {
    const {post} = this.props;

    if(!post) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to='/' className='btn btn-primary'>Back to Index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }

 }

// first argument is state (we only want the posts property), second argument is the props object this.props === ownProps; return single posts we want
function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
