import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    //field obj contains event handlers and props
    // allow this object to be communicated as props to the input tag
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
          />
        {field.meta.error}
      </div>
    )
  }

  render() {

    return (
      <form>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />

      <Field
        label='Categories'
        name='Categories'
        component={this.renderField}
        />

        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
          />

      </form>
    );
  }
}

function validate(values) {
  const errors = {}
  // validate the inputs from values
  if(!values.title || values.title.length < 3) {
    errors.title = 'Please enter a title that is at least three characters'; // add a property on the empty errors obj
  }
  if(!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if(!values.content) {
    errors.content = 'Enter some content';
  }
  // if errors is empty the form is fine to submit
  // if errors has any properties, form will assume forms are invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // name of the form - helpful if you want to have multiple forms on a page
})(PostsNew);
