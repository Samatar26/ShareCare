import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import {
  homeOwnerProfile,
  HomeOwnerPicture,
  HomeOwnerResults,
} from './../styles/homeOwners';

class HomeOwners extends Component {
  componentWillMount() {
    this.props.fetchHomeOwners();
  }

  renderProfiles = () => {
    //performance-wise best solution for iterating over objects
    const ROOT_URL = 'https://s3.eu-west-2.amazonaws.com/carebnb-fac/1/00.jpg';
    const homeOwners = this.props.homeOwners;
    const profileKeys = Object.keys(homeOwners);
    const profiles = [];

    for (var i = 0; i < profileKeys.length; i++) {
      profiles.push(
        <homeOwnerProfile key={profileKeys[i]}>

          <HomeOwnerPicture src={`${ROOT_URL.replace(/1/, i + 1)}`} />
          <span>{homeOwners[profileKeys[i]].first_name}</span>
          <span>Age: {homeOwners[profileKeys[i]].age}</span>
          <span>Gender: {homeOwners[profileKeys[i]].gender}</span>
          <span>Postcode: {homeOwners[profileKeys[i]].postcode}</span>

        </homeOwnerProfile>
      );
    }

    return profiles;
  };

  render() {
    console.log(this.props.homeOwners);

    return <HomeOwnerResults>{this.renderProfiles()}</HomeOwnerResults>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { homeOwners: state.homeOwners };
}
export default connect(mapStateToProps, actions)(HomeOwners);
