import React from 'react';
import NumberDisplay from './numberDisplay.js';
import Toolbar from './toolbar.js';

export default class GameScreen extends React.Component {
  render() {
    return (
      <div className="gameScreen">
        <div className="gameControls">
          <Toolbar />
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
}