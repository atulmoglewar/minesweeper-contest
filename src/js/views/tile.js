class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      flagged: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.nativeEvent.preventDefault();
    if (event.button === 2) {
      this.props.handleRightClick(this.props.row, this.props.col);
    } else {
      this.props.handleLeftClick(this.props.row, this.props.col);
    }
    // let isRightClick = button => button === 2;
    // let isTileClosed = () => !this.state.opened;
    // if (isTileClosed()) {
    //   if (isRightClick(event.button)) {
    //     console.log()
    //     this.toggleFlag();    
    //   } else if (!this.state.flagged) {
    //     this.setState({
    //       opened: true
    //     });
    //   } 
    // }
  }

  toggleFlag() {
    this.setState({
      flagged: !this.state.flagged
    });
  }
  renderFlaggedTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        <Flag />
      </div>
    )
  }

  renderMineTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        <Mine />
      </div>
    )
  }
  renderClosedTile() {
    return (
      <div className="tile closedTile" onClick={this.handleClick} onContextMenu={this.handleClick}>
        
      </div>
    )
  }

  renderEmptyTile() {
    return (
      <div className="tile empty" onClick={this.handleClick} onContextMenu={this.handleClick}>
        
      </div>
    )
  }
  renderNumberedTile() {
   return (
      <div className="tile empty" onClick={this.handleClick} onContextMenu={this.handleClick}>
        {this.props.value}   
      </div>
    ) 
  }

  render() {
    if (this.props.flagged) {
      return this.renderFlaggedTile();
    } else {
      if (this.props.opened) {
        if(this.props.value == 0) {
          return this.renderEmptyTile();  
        } else if(this.props.value > 0 && this.props.value <= 9) {
          return this.renderNumberedTile();  
        } else {
          return this.renderMineTile();
        }
      } else {
        return this.renderClosedTile();
      }
    }
  }
}