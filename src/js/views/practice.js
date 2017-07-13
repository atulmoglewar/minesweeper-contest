import React from 'react';
import MineSweeper from './mineSweeper.js'
import BG from './bg.js'
import GameScreen from './gameScreen';

export default class Practice extends React.Component {
  render() {
    return (
      <div>
        <BG transparent="true"/>
        <GameScreen>
          <MineSweeper rows ="9" cols="9" />
        </GameScreen>
      </div>
    )
  }
}