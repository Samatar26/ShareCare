import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class SignupForm extends Component {
  handleError = () => {
    if (this.props.errorMessage) {
      return (
        <div>
          <span>Oops {this.props.errorMessage}</span>
        </div>
      );
    }
  };
  onSubmit = ({ email, password }) => {
    this.props.signupUser({ email, password }, this.props.history);
  };
  renderField = field => {
    const { meta: { touched, error } } = field;
    console.log(error);
    return (
      <label>
        {field.label}<input type={field.inputType} {...field.input} />
        <div>{touched ? error : ''}</div>
      </label>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          label="Email"
          inputType="text"
          component={this.renderField}
        />
        <Field
          name="password"
          label="Password"
          inputType="password"
          component={this.renderField}
        />
        <Field
          name="confirm_password"
          label="Confirm Password"
          inputType="password"
          component={this.renderField}
        />
        {this.handleError()}
        <button action="submit">Sign in</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  ['email', 'password', 'confirm_password'].forEach(value => {
    if (!values[value]) errors[value] = `Please enter a ${value}`;
  });

  if (values.password !== values.confirm_password) {
    errors.confirm_password = 'The Passwords must match';
  }
  console.log(errors);
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  validate,
  form: 'signup',
})(connect(mapStateToProps, actions)(SignupForm));
