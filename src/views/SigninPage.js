import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SigninPage extends Component {
  renderField = field => {
    return (
      <div>
        <label>{field.label}<input type="text" {...field.input} /></label>
      </div>
    );
  };

  onSubmit = values => {
    console.log(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="email" label="Email" component={this.renderField} />
        <Field name="password" label="Password" component={this.renderField} />

        <button action="submit">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'homeSeekerSignin',
})(SigninPage);
