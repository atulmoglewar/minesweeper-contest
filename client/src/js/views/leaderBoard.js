import React from 'react';
import ReactDOM from 'react-dom';
import BG from './bg.js';
import {Helmet} from 'react-helmet';

export default class LeaderBoard extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MineSweeper Competition - LeaderBoard</title>
        </Helmet>
        <BG transparent="true" />
        <div>This is LeaderBoard page.</div>
      </div>
    )
  }
}