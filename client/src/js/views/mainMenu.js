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
          <div className="menuItemsContainer">
            <Link to="/practice"><MenuItem name="Practice" /></Link>
            <Link to="/compete"><MenuItem name="Compete" /></Link>
            <Link to="/leaderboard"><MenuItem name="Leaderboard" /></Link>
            <Link to="/help"><MenuItem name="Help" /></Link>
          </div>
      </div>  
    )
  }
}
