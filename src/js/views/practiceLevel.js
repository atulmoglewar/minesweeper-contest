import React from 'react';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import * as Config from '../data/config/level.js'

export default class PracticeLevel extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    console.log(event.target.value);
    MinesweeperActions.levelChange(Config.Levels[event.target.value]);
  }
  render() {
    return (
      <select className="level" onChange={this.handleChange}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
      </select>
    )
  }
}