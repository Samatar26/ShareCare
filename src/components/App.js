import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './../views/HomePage';
import SigninPage from './../views/SigninPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
        </div>
      </Router>
    );
  }
}

export default App;
