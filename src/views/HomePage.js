import React, { Component } from 'react';
import {
  HomeHeader,
  HomeSection,
  HomeArticle,
  HomeVideo,
} from './../styles/home.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeSection>
          <HomeArticle />
          <HomeArticle />
        </HomeSection>
        <HomeVideo />
      </div>
    );
  }
}

export default HomePage;
