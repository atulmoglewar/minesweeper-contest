import React from 'react';
import NumberDisplay from './numberDisplay';

export default class Timer extends React.Component {
  
  getformattedTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let remainingSeconds = (seconds % 3600);
    let minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = (remainingSeconds % 60);
    return this.fillZeros(hour) + ":" + this.fillZeros(minutes) + ":" +
      this.fillZeros(remainingSeconds)
  }

  fillZeros(number) {
    return number <= 9 ? ("0" + number) : number;
  }

  render() {
    let formattedTime = this.getformattedTime(this.props.time);

    return (
      <div className="timer unselectable">
        <img src="../../../res/img/clock.png" className="clock"/>
        <div>{formattedTime}</div>
      </div>
    )

  }  
}