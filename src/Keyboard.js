import React from 'react';

import Keys from './Keys';

export default class Keyboard extends React.Component {

  render () {
    return (
      <div>
        <p>Keyboard section</p>
        <Keys />
      </div>
    )
  }
}
