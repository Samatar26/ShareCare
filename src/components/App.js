import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './../container/Header';
import HomePage from './../views/HomePage';
import SigninPage from './../views/SigninPage';
import SignoutPage from './../views/SingOutPage';
import SignupPage from './../views/SignupPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signout" component={SignoutPage} />
          <Route exact path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
