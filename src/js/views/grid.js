class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let trs = [];
    for (let i = 0; i < this.props.rows; i++) {
      let tds = [];
      for (let j = 0; j < this.props.cols; j++) {
        tds.push(
          <td>
            <Tile value = {this.props.board[i][j].value}
                  handleRightClick = {this.props.handleRightClick}
                  handleLeftClick = {this.props.handleLeftClick}
                  row = {i}
                  col = {j}
                  opened = {this.props.board[i][j].opened}
                  flagged = {this.props.board[i][j].flagged}
            />
          </td>)
      }
      trs.push(<tr>{tds}</tr>);
    }
    return (
      <table>
        <tbody>
          {trs}
        </tbody>
      </table>
    )
  }
}