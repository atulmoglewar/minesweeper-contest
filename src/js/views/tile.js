import React from 'react';
import Flag from './flag.js';
import CrossedFlag from './crossedFlag.js';
import Mine from './mine.js';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.nativeEvent.preventDefault();
    if (event.button === 2) {
      MinesweeperActions.flagTile(this.props.row, this.props.col);
    } else {
      MinesweeperActions.openTile(this.props.row, this.props.col);
    }
  }
  
  renderFlaggedTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        <Flag />
      </div>
    )
  }

  renderWronglyFlaggedTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        <CrossedFlag />
      </div>
    )  
  }
  renderMineTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        <Mine />
      </div>
    )
  }
  renderClosedTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        
      </div>
    )
  }

  renderEmptyTile() {
    return (
      <div className="tile empty" onClick={this.handleClick} onContextMenu={this.handleClick}>
        
      </div>
    )
  }
  renderNumberedTile() {
   return (
      <div className="tile numberedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        {this.props.value}   
      </div>
    ) 
  }

  render() {
    if (this.props.wronglyPlacedFlag) {
      return this.renderWronglyFlaggedTile();
    } else if (this.props.flagged) {
      return this.renderFlaggedTile();
    } else {
      if (this.props.opened) {
        if(this.props.value == 0) {
          return this.renderEmptyTile();  
        } else if(this.props.value > 0 && this.props.value <= 9) {
          return this.renderNumberedTile();  
        } else {
          return this.renderMineTile();
        }
      } else {
        return this.renderClosedTile();
      }
    }
  }
}