import React from 'react';
import NumberDisplay from './numberDisplay';
export default class RemainingMines extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let nMines = this.props.nMines < 10 ? "0" + this.props.nMines :
                 this.props.nMines;
    return (
      <div className="remainingMines unselectable">
        <div> {nMines} </div>
        <img src='../../../res/img/black-flag.png'/>
      </div>
    )
  }
}