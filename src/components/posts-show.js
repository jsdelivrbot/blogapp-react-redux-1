import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
      // this.props.match.params.id;  // provided by react router
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
  }

  // helperFunction() {
  //   this.props.posts[this.props.match.params.id];
  // }

  render() {

    return (
      <div>Posts Show!</div>
    )
  }

 }

// first argument is state (we only want the posts property), second argument is the props object this.props === ownProps; return single posts we want
function mapStateToProps({posts}, ownProps) {
  return { posts: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);
