import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Sections />
      </div>
    );
  }
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
