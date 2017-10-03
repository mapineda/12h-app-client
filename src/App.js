import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>12 HELLO</h1>
        </div>
        <h2>Simplicity Reimagined</h2>
        <p className="App-intro">
          To begin, <strong>post</strong> a gig, <strong>discover</strong> an opportunity or <strong>initiate</strong> a call.
        </p>
      </div>
    );
  }
}

export default App;
