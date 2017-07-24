import React from 'react';

export default class NumberDisplay extends React.Component {
  display(char) {

  }
  render() {
    return(
      <div className="numbers">{this.props.numbers}</div>
    )
  }
}