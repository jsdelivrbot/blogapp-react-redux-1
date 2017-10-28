import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    //field obj contains event handlers and props
    // allow this object to be communicated as props to the input tag

    const { meta: { touched, error } } = field; // destructuring - pull off the touched and error properties from the meta object; helps access properties from nested objects

    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
          />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props; // handleSubmit is a property passed to our component on behalf of redux-form

    // on submit, it will call handleSubmit. the redux-form side will check it all is good. then, it will call the callback of onSubmit and pass the values

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />

      <Field
        label='Categories'
        name='categories'
        component={this.renderField}
        />

        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
          />
        <button type='submit' className='btn btn-primary'>Submit</button>
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
