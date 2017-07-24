import React from 'react';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';

export default class RestartGame extends React.Component {

  constructor() {
    super();
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh() {
    MinesweeperActions.restartGame();
  }
  render() {
    return (
      <button className="restart" onClick={this.handleRefresh}>
        <img className="refresh" src="../../../res/img/refresh.png"/>
      </button>
    )
  }
}