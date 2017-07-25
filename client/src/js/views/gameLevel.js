import React from 'react';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import * as Config from '../data/config/level.js'

export default class GameLevel extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    let gameLevel = event.target.value
    MinesweeperActions.levelChange(gameLevel, Config.Levels[gameLevel]);
  }
  renderOptions(options) {
    let optionElements = [];
    options.forEach( (option) => {
      let elm = <option 
                  value={option.value} 
                  onChange={this.handleChange}>{option.displayText}
                </option>
      optionElements.push(elm);
    });
    return optionElements;
  }
  render() {
    return (
      <select className="level" onChange={this.handleChange}>
        {this.renderOptions(this.props.options)}
      </select>
    )
  }
}