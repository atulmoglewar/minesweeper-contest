import GameTile from './gameTile.js';

export default class GameEngine {
  constructor(rows, cols, nMines) {
    this.rows = rows;
    this.cols = cols;
    this.nMines = nMines;
    this.nMinesRemainning = nMines;
    this.board = this.initBoard();
  }

  startGameFrom(row, col) {
    let startTile = this.board[row][col];
    this.placeMines(startTile);
    this.generateHints();
    this.revealSurrounding(row, col);
  }

  startGame() {
    this.placeMines();
    this.generateHints();  
  }

  initBoard(rows, cols) {
    let board = [];
    for (let i = 0; i < this.rows; i++) {
      let row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(new GameTile(0, i, j));
      }
      board.push(row);
    }
    return board;
  }

  placeMines(startTile) {
    let getRandomInt = (min, max) => 
                       Math.floor(Math.random() * (max - min + 1)) + min;
    let getRandomRow = () => getRandomInt(0, this.rows - 1);
    let getRandomCol = () => getRandomInt(0, this.rows - 1);

    let totalPlaced = 0;
    while (totalPlaced < this.nMines) {
      let rRow = getRandomRow();
      let rCol = getRandomCol();
      let tile = this.board[rRow][rCol];
      if (tile.isEmpty()) {
        if (!startTile || (startTile && tile.row !== startTile.row && 
        tile.col !== startTile.com)) {
          tile.value = -1;
          totalPlaced++;  
        }
        
      }
    }
  }
  
  getSurroundingMines(row, col) {
    let rowInRange = (r) => r >= 0 && r < this.rows;
    let colInRange = (c) => c >= 0 && c < this.cols;
    let indeInRange = (r, c) => rowInRange(r) && colInRange(c)
    let self = (r, c) => r === row && c === col;
    let nMines = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (!self(i, j) && indeInRange(i, j)) {
          let tile = this.board[i][j];
          if (tile.containsMine()) {
            nMines++;  
          }
        } 
      }  
    }
    return nMines; 
  }
  
  containsMine(r,c) {
   return this.board[r][c].value === -1;
  }

  generateHints() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let tile = this.board[i][j];
        if (!tile.containsMine()) {
          tile.value = this.getSurroundingMines(i, j);  
        }
      }
    }
  }
  
  openAllTiles() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let tile = this.board[i][j];
        if (!tile.flagged) {
          tile.opened = true;
        }
      }
    }  
  }

  revealSurrounding(row, col) {
    let tile = this.board[row][col];
    tile.opened = true;
    if (tile.isEmpty()) {
      let rowInRange = (r) => r >= 0 && r < this.rows;
      let colInRange = (c) => c >= 0 && c < this.cols;
      let indeInRange = (r, c) => rowInRange(r) && colInRange(c)
      let self = (r, c) => r === row && c === col;
      let emptyTiles = [tile];

      let reveal = (tile) => {
        for (let i = tile.row - 1; i <= tile.row + 1; i++) {
          for (let j = tile.col - 1; j <= tile.col + 1; j++) {
            if (indeInRange(i, j)) {
              let neigbhour = this.board[i][j];
              if (!neigbhour.flagged && !neigbhour.containsMine() && !neigbhour.opened) {
                neigbhour.opened = true;
                if (neigbhour.isEmpty()) {
                  emptyTiles.push(neigbhour);
                }                
              }
            } 
          }  
        }  
      }

      for (let count = 0; count < emptyTiles.length; count++) {
        reveal(emptyTiles[count]);
      }  
    }
  }

  revealWronglyPlacedFlags() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let tile = this.board[i][j];
        if (tile.flagged && !tile.containsMine()) {
          tile.wronglyPlacedFlag = true;
        }
      }
    }  
  }

  restart() {
    this.board = this.initBoard(); 
    this.nMinesRemainning = this.nMines;   
  }  

  flagTile(row, col) {
    let tile = this.board[row][col];
    if (!tile.opened) {
      if (!tile.flagged) {
        if (this.nMinesRemainning > 0) {
          tile.flagged = true;
          this.nMinesRemainning--;  
        }
      } else {
        tile.flagged = false;
        this.nMinesRemainning++;
      }
    }
  }
}