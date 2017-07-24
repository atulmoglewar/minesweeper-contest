import React from 'react';

export default class BG extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.transparent === "true") {
      return <img style={{opacity: 0.2 }} className="bg" src="../../../res/img/bg.jpg" />  
    } else {
      return <img className="bg" src="../../../res/img/bg.jpg" />  
    }
  }
}