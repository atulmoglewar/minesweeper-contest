import GameEngine from '../../models/gameEngine.js';
import dispatcher from "../dispatcher";
import {EventEmitter} from "events";

class GameStore extends EventEmitter{
  constructor(grid, dispatcher) {
    super();
    this.gameStarted = false;
    this.gameEngine = new GameEngine(grid.row, grid.col, grid.nMines);
  }

  handleAction(action) {
    switch(action.type) {
      case 'FLAG_TILE':
        console.log(action.tile.row, action.tile.col);
        this.flagTile(action.tile.row, action.tile.col);
        this.emit("change");
      break;
      case 'OPEN_TILE':
        console.log(action.tile);
        this.openTile(action.tile.row, action.tile.col);
        this.emit("change");
      break;
    }
  }

  flagTile(row, col) {
    let tile = this.gameEngine.board[row][col];
    if (!tile.opened) {
      tile.flagged = !tile.flagged;
    }
  }

  openTile(row, col) {
    let tile = this.gameEngine.board[row][col];
    if (!this.gameStarted) {
      this.gameEngine.startGameFrom(row, col);
      this.gameStarted = true;  
    } else {
      if (!tile.flagged && !tile.opened) {
        if (this.gameEngine.containsMine(row, col)) {
          this.gameEngine.openAllTiles();
          this.gameEngine.revealWronglyPlacedFlags();
        } else {
          this.gameEngine.revealSurrounding(row, col);
        }
      }  
    }
  }
  getBoard() {
    return this.gameEngine.board;
  }
}


const gameStore = new GameStore({row: 9, col: 9, nMines: 10});
dispatcher.register(gameStore.handleAction.bind(gameStore));
export default gameStore;
