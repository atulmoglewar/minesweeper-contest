import React from 'react';
import BG from './bg.js';
import {Helmet} from 'react-helmet';

export default class Help extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MineSweeper Competition - Help</title>
        </Helmet>
        <BG transparent="true"/>
        <div>
          <ul>
            <li>How to play
               The player is initially presented with a grid of undifferentiated tiles. Some randomly selected tiles, unknown to the player, are designated to contain mines. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.
 The game is played by revealing tiles of the grid by clicking or otherwise indicating each tile. If a tile containing a mine is revealed, the player loses the game. If no mine is revealed, a digit is instead displayed in the tile, indicating how many adjacent squares contain mines; if no mines are adjacent, the tile becomes blank, and all adjacent tiles will be recursively revealed. The player uses this information to deduce the contents of other squares, and may either safely reveal each square or mark the square as containing a mine.
            </li>
            <li>What happens if the first tile I click is a bomb?
                The game makes sure that the first tile user clicks is never a mine.
            </li>
            <li>How do you rate?</li>
 
            <li>Who am I competing with?
                You are competing with players from all around the world.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}