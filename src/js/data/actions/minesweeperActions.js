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
