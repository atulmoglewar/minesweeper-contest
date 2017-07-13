import React from 'react';
import Tile from './tile.js';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  createBoardTiles() {
    let trs = [];
    for (let i = 0; i < this.props.rows; i++) {
      let tds = [];
      for (let j = 0; j < this.props.cols; j++) {
        let gameTile = this.props.board[i][j];
        tds.push(
          <td>
            <Tile value = {gameTile.value}
                  handleRightClick = {this.props.handleRightClick}
                  handleLeftClick = {this.props.handleLeftClick}
                  row = {i}
                  col = {j}
                  opened = {gameTile.opened}
                  flagged = {gameTile.flagged}
                  wronglyPlacedFlag = {gameTile.wronglyPlacedFlag} 
            />
          </td>)
      }
      trs.push(<tr>{tds}</tr>);
    }
    return trs;  
  }

  render() {
    let trs = this.createBoardTiles();
    return (
      <table>
        <tbody>
          {trs}
        </tbody>
      </table>
    )
  }
}