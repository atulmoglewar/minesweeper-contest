class GameTile {
  constructor(value, row, col) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.opened = false;
    this.flagged = false;
  }

  isEmpty() {
    return this.value === 0;
  }

  containsMine() {
    return this.value === -1;
  }
}