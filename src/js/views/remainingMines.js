import React from 'react';
import NumberDisplay from './numberDisplay';
export default class RemainingMines extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="remainingMines">
        <img src='./res/img/flag.png'/>
        <NumberDisplay numbers={this.props.nMines} />
      </div>
    )
  }
}