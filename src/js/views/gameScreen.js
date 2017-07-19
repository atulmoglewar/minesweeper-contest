import React from 'react';
import NumberDisplay from './numberDisplay.js';
import Toolbar from './toolbar.js';
import PracticeLevel from './practiceLevel'
import MineSweeper from './mineSweeper.js'

export default class GameScreen extends React.Component {
  render() {
    return (
      <div className="gameScreen">
        <div className="gameControls">
          <MineSweeper />
          <Toolbar />
        </div>
      </div>
    )
  }
}