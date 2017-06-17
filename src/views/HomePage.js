import React, { Component } from 'react';
import {
  Header,
  HeaderBrand,
  HeaderOption,
  UserOptions,
  UserOption,
  UserTitle,
  UserDescription,
  Introduction,
  Video,
} from './../styles/home.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header>
          <HeaderBrand>ShareCare</HeaderBrand>
          <HeaderOption to="/signin">Sign in</HeaderOption>
          <HeaderOption to="/signup">Sign up</HeaderOption>
        </Header>
        <Introduction>
          CareBnB is a programme that matches people who want help or
          support around the house with people who need accomodation and are
          willing to help.
        </Introduction>
        <UserOptions>
          <UserOption>
            <UserTitle>Home Owner</UserTitle>
            <UserDescription>
              Are you a person who need some help at home and has a spare room
              to offer?
            </UserDescription>
          </UserOption>
          <UserOption>
            <UserTitle>Home Seeker</UserTitle>
            <UserDescription>
              Are you a person looking for affordable accommodation and willing
              to
              help at least 10 hours per week in return for that?
            </UserDescription>
          </UserOption>
        </UserOptions>
        <Video to="/video">Watch Video</Video>
      </div>
    );
  }
}

export default HomePage;
