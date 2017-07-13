import GameEngine from '../../models/gameEngine.js';
import dispatcher from "../dispatcher";
import {EventEmitter} from "events";

class GameStore extends EventEmitter {
  
  constructor(grid, dispatcher) {
    super();
    this.gameStarted = false;
    this.gameTime = 0;
    this.gameEngine = new GameEngine(grid.row, grid.col, grid.nMines);
    this.incrementGameTime = this.incrementGameTime.bind(this);
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
      case 'RESTART_GAME':
        this.gameEngine.restart(); 
        this.gameStarted = false;
        this.gameTime = 0;
        clearInterval(this.intervalID);      
        this.emit("change");
        break;
    }
  }

  flagTile(row, col) {
    this.startGameIfNotStarted();
    this.gameEngine.flagTile(row, col);
  }

  openTile(row, col) {
    let tile = this.gameEngine.board[row][col];
    if (!this.gameStarted) {
      this.startGameIfNotStarted(row, col);
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

  startGameIfNotStarted(row, col) {
    if (!this.gameStarted) {
      if (row !== undefined && col !== undefined) {
        this.gameEngine.startGameFrom(row, col);
      } else {
        this.gameEngine.startGame();
      }
      this.gameStarted = true;
      this.startTimer();
    }
  }

  incrementGameTime() {
    this.gameTime += 1;
    this.emit("change");
  }

  startTimer() {
     this.intervalID = setInterval(this.incrementGameTime, 1000);
  }

  getBoard() {
    return this.gameEngine.board;
  }

  getNMinesRemaining() {
    return this.gameEngine.nMinesRemainning;
  }

  getGameTime() {
    return this.gameTime;
  }
}


const gameStore = new GameStore({row: 9, col: 9, nMines: 10});
dispatcher.register(gameStore.handleAction.bind(gameStore));
export default gameStore;
