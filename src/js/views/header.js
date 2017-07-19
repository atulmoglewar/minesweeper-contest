import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerTitle">The Minesweeper</div>
        <div className="headerPageLinks">
          <a href="/" className="headerPageLink">Home </a>
          <a href="/compete" className="headerPageLink">Compete</a>
          <a href="/leaderboard" className="headerPageLink">Leaderboard</a>
          <a href="/help" className="headerPageLink">Help</a>
        </div>
      </div>
    )
  }
}