import dispatcher from '../dispatcher.js';

export function flagTile(row, col) {
  dispatcher.dispatch({
    type: 'FLAG_TILE',
    tile: {row: row, col: col}
  });
}

export function openTile(row, col) {
  dispatcher.dispatch({
    type: 'OPEN_TILE',
    tile: {row: row, col: col}
  });
}

export function restartGame() {
  dispatcher.dispatch({
    type: 'RESTART_GAME'
  });  
}

export function levelChange(name, data) {
  dispatcher.dispatch({
    type: 'LEVEL_CHANGE',
    name: name,
    data: data
  })
}