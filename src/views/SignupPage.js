import React, { Component } from 'react';
import SignupForm from './../container/SignupForm';

class SignupPage extends Component {
  render() {
    return <SignupForm history={this.props.history} />;
  }
}

export default SignupPage;
