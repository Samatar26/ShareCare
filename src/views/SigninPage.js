import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class SigninPage extends Component {
  renderField = field => {
    return (
      <div>
        <label>
          {field.label}<input type={field.inputType} {...field.input} />
        </label>
      </div>
    );
  };

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
    this.props.signinUser({ email, password }, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
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
        {this.handleError()}
        <button action="submit">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'homeSeekerSignin',
})(connect(mapStateToProps, actions)(SigninPage));
