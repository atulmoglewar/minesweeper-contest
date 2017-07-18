import React from 'react';
import NumberDisplay from './numberDisplay.js';
import Toolbar from './toolbar.js';
import PracticeLevel from './practiceLevel'
export default class GameScreen extends React.Component {
  render() {
    return (
      <div className="gameScreen">
        <div className="gameControls">
          <Toolbar />
          <div style={{display:"flex", flexDirection: "row"}}>
            <div>{this.props.children}</div>
            <PracticeLevel />
          </div>
        </div>
      </div>
    )
  }
}