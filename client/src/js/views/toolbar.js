import React from 'react';
import NumberDisplay from './numberDisplay';
import Timer from './timer';
import RemainingMines from './remainingMines';
import GameStore from '../data/store/gameStore.js';
import GameLevel from './gameLevel';
import RestartGame from './restartGame';
import * as Options from '../data/config/options.js';

export default class Toolbar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      nRemainingMines: GameStore.getNMinesRemaining(),
      gameTime: GameStore.getGameTime()
    }
  }

  componentWillMount() {
    GameStore.on("change", () => {
      this.setState({
        nRemainingMines: GameStore.getNMinesRemaining(),
        gameTime: GameStore.getGameTime()
      })
    });
  }
  getOptions() {
    return GameStore.isPracticeSession() ?
      Options.Options.practice :
      Options.Options.compete;
  }
  render() {
    return(
      <div className="toolbar">
        <RemainingMines nMines={this.state.nRemainingMines} />
        <RestartGame />
        <Timer time={this.state.gameTime} />
        <GameLevel options={this.getOptions()}/>
      </div>
    )
  }
}