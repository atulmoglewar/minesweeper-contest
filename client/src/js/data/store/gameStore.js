import GameEngine from '../../models/gameEngine.js';
import dispatcher from "../dispatcher";
import {EventEmitter} from "events";

class GameStore extends EventEmitter {
  
  constructor() {
    super();
    dispatcher.register(this.handleAction.bind(this));
    this.gameStarted = false;
    this.gameTime = 0;
    this.userLoggedIn = false;
    this.incrementGameTime = this.incrementGameTime.bind(this);
  }

  handleAction(action) {
    switch(action.type) {
      case 'FLAG_TILE':
        if(!this.gameEnded()) {
          this.flagTile(action.tile.row, action.tile.col);
          this.emit("change");
        }
      break;
      case 'OPEN_TILE':
        if(!this.gameEnded()) {
          this.openTile(action.tile.row, action.tile.col);
          let gameStatus = this.getGameStatus();
          if (gameStatus === "WON" || gameStatus === "LOST") {
            this.stopTimer();
          }
          this.emit("change");  
        }
        
      break;
      case 'RESTART_GAME':
        this.restartGame();              
        this.emit("change");
        break;
      case 'LEVEL_CHANGE':
        this.gameLevel = action.name;
        this.gameEngine = new GameEngine(action.data.row, 
          action.data.col, action.data.nMines);
        this.restartGame();
        this.emit("change");
        break;
    }
  }

  gameEnded() {
    let gameStatus = this.getGameStatus();
    return (gameStatus === "WON" || gameStatus === "LOST");
  }
  restartGame() {
    this.gameEngine.restart(); 
    this.gameStarted = false;
    this.gameTime = 0;
    this.stopTimer();
  }

  stopTimer() {
    clearInterval(this.intervalID);
    this.intervalID = undefined;
  }
  flagTile(row, col) {
    this.gameEngine.flagTile(row, col);
    this.startTimerIfNotAlready();
  }

  openTile(row, col) {
    this.gameEngine.openTile(row, col);
    this.startTimerIfNotAlready();
  }

  incrementGameTime() {
    this.gameTime += 1;
    this.emit("change");
  }

  startTimerIfNotAlready() {
    if (!this.intervalID) {
     this.intervalID = setInterval(this.incrementGameTime, 1000);
    }
  }

  getBoard() {
    return this.gameEngine.board;
  }

  getNMinesRemaining() {
    return this.gameEngine.nMinesRemainning;
  }
  getRows() {
    return this.gameEngine.rows;  
  }
  getCols() {
    return this.gameEngine.cols;  
  }
  getGameTime() {
    return this.gameTime;
  }
  getGameLevel() {
    return this.gameLevel;
  }
  getGameStatus() {
    return this.gameEngine.getGameStatus();
  }
  isPracticeSession() {
    return (this.gameLevel === 'beginner' || 
      this.gameLevel === 'intermediate');
  }
  isUserLoggedIn() {
    return this.userLoggedIn;
  }
}

const gameStore = new GameStore();
export default gameStore;
