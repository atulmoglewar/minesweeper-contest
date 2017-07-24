import React from 'react';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menuItem">
        <button className="btn btn-block btn-custom" style={{fontWeight: 'bold', fontSize: 18 + 'px'}}>{this.props.name}</button>
      </div>
    )
  }
}