import React from 'react';

export default class MainMenuHeader extends React.Component {
  render() {
    return (
      <div className="mainMenuHeader">
        <img className= "logoHeader" src="../../../res/img/flag.png"/>
        <img className= "logoHeader" src="../../../res/img/mine.png"/>
        <img style={{marginRight: 0 + 'px'}} className= "logoHeader" src="../../../res/img/flag.png"/>
      </div>
    )
  }
}