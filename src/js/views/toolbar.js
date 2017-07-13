import React from 'react';
import NumberDisplay from './numberDisplay';
import Timer from './timer';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import GameStore from '../data/store/gameStore.js'

export default class Toolbar extends React.Component {
  
  constructor() {
    super();
    this.handleRefresh = this.handleRefresh.bind(this);
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

  handleRefresh() {
    MinesweeperActions.restartGame();
  }

  render() {
    return(
      <div className="toolbar">
        <NumberDisplay numbers={this.state.nRemainingMines} />
        <button>
          <img className="refresh" src="../../../res/img/refresh.png" 
          onClick={this.handleRefresh}/>
        </button>
        <Timer time={this.state.gameTime} />
      </div>
    )
  }
}