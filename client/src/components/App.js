import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import FlashContainer from "./containers/FlashContainer";
import Layout from "./bulma/Layout"

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

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

const Sections = () => {
  fetch("/api/sections")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
  return(
    <div>
      <h2>Sections</h2>
    </div>
  )
}

export default App;
