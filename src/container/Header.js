import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, HeaderBrand, HeaderOption } from './../styles/home';
import * as action from './../actions/index.js';

class HeaderComponent extends Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      return <HeaderOption to="/singout">Sign out</HeaderOption>;
    } else {
      return [
        <HeaderOption key={1} to="/signin">Sign in</HeaderOption>,
        <HeaderOption key={2} to="/signup">Sign up</HeaderOption>,
      ];
    }
  };

  render() {
    return (
      <Header>
        <HeaderBrand>ShareCare</HeaderBrand>
        {this.renderLinks()}
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(HeaderComponent);
