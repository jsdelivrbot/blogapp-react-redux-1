import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
    //field obj contains event handlers and props
    // allow this object to be communicated as props to the input tag
    <div>
      <input>
        type='text'
        {...field.input}
      </input>
    </div>
  }

  render() {

    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />

      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm' // name of the form - helpful if you want to have multiple forms on a page
})(PostsNew);
