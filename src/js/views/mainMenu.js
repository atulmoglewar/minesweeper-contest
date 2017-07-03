import React from 'react';
import MainMenuHeader from './mainMenuHeader.js'
import MenuItem from './menuItem.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



export default class MainMenu extends React.Component {
  render() {
    return (
      <div className="mainMenu">
        <MainMenuHeader />
          <div className="mainMenuTitle">The Minesweeper </div>
          <Router>
            <div className="menuItemsContainer">
              <a href="/practice"><MenuItem name="Practice" /></a>
              <a href="/compete"><MenuItem name="Compete" /></a>
              <a href="/leaderboard"><MenuItem name="Leaderboard" /></a>
              <a href="/help"><MenuItem name="Help" /></a>
            </div>
          </Router>
      </div>  
    )
  }
}
