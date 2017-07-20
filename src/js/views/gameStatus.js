import React from 'react';

export default class GameStatus extends React.Component {
  render() {
    let className = this.props.status === "WON" ? "gameWon" : "gameLost";
    return (
      <div className={"gameStatus " + className}>{this.props.message}</div>
    )
  }
}