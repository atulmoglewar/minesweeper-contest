import React from 'react';
import NumberDisplay from './numberDisplay.js';
import Toolbar from './toolbar.js';
import MineSweeper from './mineSweeper.js'
import GameStore from '../data/store/gameStore.js'

export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      level: GameStore.getGameLevel()
    }
  }
  componentWillMount() {
    GameStore.on("change", () => {
      this.setState({ level: GameStore.getGameLevel()})
    });
  }
  
  render() {
    return (
      <div className={"gameScreen " + this.state.level} >
          <div className="gameControls">
            <MineSweeper />
            <Toolbar />
          </div>;
      </div>
    )
  }
}