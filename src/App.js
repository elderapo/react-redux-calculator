import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
