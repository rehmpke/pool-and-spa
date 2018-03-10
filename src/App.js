import React, { Component } from 'react';
import './App.css';
import './api/chemicals.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pool and Spa Inventory</h1>
        </header>
        <p className="App-intro">
          Our family pool and spa chemical inventory system.
        </p>

      </div>
    );
  }
}

export default App;
