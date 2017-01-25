import React, { Component } from 'react';
import './App.css';

import Keyboard from './Keyboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Kitty Keyboard</p>
        <Keyboard />
      </div>
    );
  }
}

export default App;
