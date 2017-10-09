import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import FlashContainer from './components/containers/FlashContainer';
import Home from './pages/home';
import Sections from './pages/sections/index';
import Courses from './pages/courses/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <FlashContainer />
          <Route exact path="/" component={Home} />
          <Route path="/sections" component={Sections} />
          <Route path="/courses" component={Courses} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
