import React from 'react';
import MineSweeper from './mineSweeper.js'
import BG from './bg.js'
import GameScreen from './gameScreen';
import * as MinesweeperActions from '../data/actions/minesweeperActions.js';
import * as Config from '../data/config/level.js';
import * as Page from '../data/config/routes.js';
import Header from './header'
import {Helmet} from "react-helmet";

export default class Practice extends React.Component {
  componentWillMount() {
    MinesweeperActions.levelChange("beginner", Config.Levels.beginner);
  }
  render() {
    let props = [Page.Routes.home, Page.Routes.compete, 
    Page.Routes.leaderboard, Page.Routes.help];
    return (
      <div>
        <Helmet>
          <title>MineSweeper Competition - Practice</title>
        </Helmet>
        <BG transparent="true"/>
        <Header links={props}/>
        <GameScreen />
      </div>
    )
  }
}