import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class HomeOwners extends Component {
  componentWillMount() {
    this.props.fetchHomeOwners();
  }
  render() {
    return <div>Secret page</div>;
  }
}

export default connect(null, actions)(HomeOwners);
