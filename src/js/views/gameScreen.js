import React from 'react';
import NumberDisplay from './numberDisplay.js';
import Toolbar from './toolbar.js';
import PracticeLevel from './practiceLevel'
import MineSweeper from './mineSweeper.js'
import GameStore from '../data/store/gameStore.js'

export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      level: GameStore.getGameLevel()
    }
  }
  componentWillMount() {
    GameStore.on("change", () => {
      this.setState({ level: GameStore.getGameLevel()})
    });
  }
  renderToolbarFirst() {
    return <div className="gameControls"><MineSweeper /><Toolbar /></div>;
    return <div className="gameControls"><Toolbar /><MineSweeper /></div>;
  }
  renderBoardFirst() {
    return <div className="gameControls"><MineSweeper /><Toolbar /></div>;
  }
  renderScreen() {
    return this.state.level === 'beginner' || this.state.level === 'intermediate'? 
      this.renderBoardFirst() : this.renderToolbarFirst();
  }
  render() {
    return (
      <div className={"gameScreen " + this.state.level} >
          {this.renderScreen()}
      </div>
    )
  }
}