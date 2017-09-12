import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>App</h1>
          <Route exact path="/" component={Home} />
          <Route path="/sections" component={Sections} />
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
