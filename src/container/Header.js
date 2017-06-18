import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, HeaderBrand, HeaderOption } from './../styles/home';
import * as action from './../actions/index.js';

class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <HeaderBrand>ShareCare</HeaderBrand>
        <HeaderOption to="/signin">Sign in</HeaderOption>
        <HeaderOption to="/signup">Sign up</HeaderOption>
      </Header>
    );
  }
}

export default connect()(HeaderComponent);
