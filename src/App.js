import React, { Component } from 'react';
import './styles/App.css';

import Keyboard from './Keyboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kitty Keyboard</h1>
        <Keyboard />
      </div>
    );
  }
}

export default App;
