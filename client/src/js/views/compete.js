import React from 'react';
import MineSweeper from './mineSweeper.js'
import BG from './bg.js'
import GameScreen from './gameScreen';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import * as Config from '../data/config/level.js';
import * as Page from '../data/config/routes.js';
import Header from './header'

export default class Compete extends React.Component {
  componentWillMount() {
    MinesweeperActions.levelChange("advance", Config.Levels.advance);
  }
  render() {
    let props = [Page.Routes.home, Page.Routes.practice, 
    Page.Routes.leaderboard, Page.Routes.help];
    return (
      <div>
        <BG transparent="true"/>
        <Header links={props}/>
        <GameScreen />
      </div>
    )
  }
}