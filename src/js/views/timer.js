export class Timer extends React.Component {
  constructor() {
    super();
    this.state = {totalSeconds: 0}  
  }
  getformattedTime(seconds) {
    return "00:00:00"
  }
  render() {
    let formattedTime = this.getformattedTime(this.state.totalSeconds);
    return <div className="timer">{formattedTime}</div>
  }  
}