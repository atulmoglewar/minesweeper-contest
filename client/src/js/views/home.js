import React from 'react';
import BG from './bg.js'
import MainMenu from './mainMenu.js'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <BG />
        <MainMenu />
      </div>
    )
  }
}