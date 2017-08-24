import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>This is posts index</div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
