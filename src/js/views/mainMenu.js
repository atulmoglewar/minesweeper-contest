import React from 'react';
import MainMenuHeader from './mainMenuHeader.js'
import MenuItem from './menuItem.js';

export default class MainMenu extends React.Component {
  render() {
    return (
      <div className="mainMenu">
        <MainMenuHeader />
          <div className="mainMenuTitle">The Minesweeper </div>
          <div className="menuItemsContainer">
            <MenuItem name="Practice" />
            <MenuItem name="Compete" />
            <MenuItem name="Leaderboard" />
            <MenuItem name="Help" />
          </div>
      </div>  
    )
  }
}
