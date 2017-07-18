import React from 'react';
import MineSweeper from './mineSweeper.js'
import BG from './bg.js'
import GameScreen from './gameScreen';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import * as Config from '../data/config/level.js'

export default class Practice extends React.Component {
  componentWillMount() {
    MinesweeperActions.levelChange(Config.Levels.beginner);
  }
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