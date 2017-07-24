import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerTitle">The Minesweeper</div>
        <div className="headerPageLinks">
          {this.renderLinks(this.props.links)}
        </div>
      </div>
    )
  }

  renderLinks(links) {
    // let links = props.links;
    let linkElements = [];
    for (let i = 0; i < links.length; i++) {
      linkElements.push(
        <a href={links[i].href} className="headerPageLink">{links[i].text}</a>
      )
    }
    return linkElements;
  }
}