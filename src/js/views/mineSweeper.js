class MineSweeper extends React.Component {
  constructor(props) {
    super(props);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.gameStarted = false;
    this.state = {
      gameEngine: new GameEngine(props.rows, props.cols, props.nMines)
    }
  }
  handleLeftClick(row, col) {
    let gameEngine = this.state.gameEngine;
    let tile = gameEngine.board[row][col];
    if (!this.gameStarted) {
      gameEngine.startGameFrom(row, col);
      this.gameStarted = true;
      this.setState({gameEngine: gameEngine});  
    } else {
      if (!tile.flagged && !tile.opened) {
        if (gameEngine.containsMine(row, col)) {
          gameEngine.openAllTiles();
        } else {
          gameEngine.revealSurrounding(row, col);
        }
        this.setState({gameEngine: gameEngine});  
      }  
    }
  }
  handleRightClick(row, col) {
    let gameEngine = this.state.gameEngine;
    let tile = gameEngine.board[row][col];
    if (!tile.opened) {
      tile.flagged = !tile.flagged;
      this.setState({
        gameEngine: gameEngine
      });      
    }
    
  }
  render() {
    return (<Grid 
                rows={this.props.rows}
                cols={this.props.cols} 
                board={this.state.gameEngine.board}
                handleLeftClick={this.handleLeftClick}
                handleRightClick={this.handleRightClick}
              />
            )
  }
}