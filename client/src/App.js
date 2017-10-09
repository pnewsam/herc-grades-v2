import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import FlashContainer from './components/containers/FlashContainer';
import Layout from './components/bulma/Layout';
import Home from './pages/home';
import Sections from './pages/sections';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <FlashContainer />
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/sections" component={Sections} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/login" component={Login} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
