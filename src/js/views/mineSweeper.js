import React from 'react';
import GameEngine from '../models/gameEngine.js';
import Grid from './grid.js';
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

  
  render() {
    return (
      <Grid 
        rows={this.props.rows}
        cols={this.props.cols} 
        board={this.state.board}
        handleLeftClick={this.handleLeftClick}
        handleRightClick={this.handleRightClick}
      />
    )
  }
}