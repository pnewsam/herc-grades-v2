import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import FlashContainer from './components/containers/FlashContainer';
import Home from './pages/home';
import Sections from './pages/sections/index';
import Login from './pages/login';
import Profile from './pages/profile';
import { store } from './index.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().session.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <FlashContainer />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/sections" component={Sections} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
