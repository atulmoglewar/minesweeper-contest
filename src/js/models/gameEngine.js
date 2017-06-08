class GameEngine {
  constructor(rows, cols, nMines) {
    this.rows = rows;
    this.cols = cols;
    this.nMines = nMines;
    this.board = this.initBoard();
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

  placeMines() {
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
        tile.value = -1;
        totalPlaced++;
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
  
  containsMine = (r,c) => this.board[r][c].value === -1;

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

  print() {
    for (let i = 0; i < this.rows; i++) {
      let r = "";
      for (let j = 0; j < this.cols; j++) {
        r += this.board[i][j].value;
      }  
      console.log(r);
    }
  }
}