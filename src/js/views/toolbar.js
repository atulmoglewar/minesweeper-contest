import React from 'react';
import NumberDisplay from './numberDisplay';
import Timer from './timer';
import RemainingMines from './remainingMines'
import GameStore from '../data/store/gameStore.js'
import PracticeLevel from './practiceLevel'
import RestartGame from './restartGame'
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

  render() {
    return(
      <div className="toolbar">
        <RemainingMines nMines={this.state.nRemainingMines} />
        <RestartGame />
        <Timer time={this.state.gameTime} />
        <PracticeLevel style={{marginBottom:"20px"}}/>
      </div>
    )
  }
}