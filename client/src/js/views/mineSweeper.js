import React from 'react';
import GameEngine from '../models/gameEngine.js';
import Grid from './grid.js';
import GameStatus from './gameStatus';
import GameStore from '../data/store/gameStore.js'

export default class MineSweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: GameStore.getBoard()
    }
  }

  componentWillMount() {
    GameStore.on("change", () => {
      this.setState({
        board: GameStore.getBoard()
      })
    });
  }

  renderGrid() {
    return (
      <Grid 
        rows={GameStore.getRows()}
        cols={GameStore.getCols()} 
        board={GameStore.getBoard()}
        gameLevel={GameStore.getGameLevel()}
        handleLeftClick={this.handleLeftClick}
        handleRightClick={this.handleRightClick}
      />
    )
  }
  render() {
    let gameStatus = GameStore.getGameStatus();
    let message = "";
    if (gameStatus === 'WON') {
      message = "Congratulations!!! You Won."
    } else if (gameStatus === 'LOST') {
      message = "Sorry! You Lost. Try Again."
    }
    if (message) {
      return (
        <div>
          <GameStatus status = {gameStatus} message={message}/>
          {this.renderGrid()}
        </div>
      )
    } else {
      return this.renderGrid();  
    }
    
  }
}