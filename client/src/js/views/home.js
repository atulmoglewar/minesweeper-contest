import React from 'react';
import BG from './bg.js';
import MainMenu from './mainMenu.js';
import {Helmet} from 'react-helmet';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MineSweeper Competition - Home</title>
        </Helmet>
        <BG />
        <MainMenu />
      </div>
    )
  }
}