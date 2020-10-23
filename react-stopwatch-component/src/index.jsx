import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      playClick: false,
      pauseClick: true
    };
    this.playHandleClick = this.playHandleClick.bind(this);
    this.pauseHandleClick = this.pauseHandleClick.bind(this);
    this.clearHandleClick = this.clearHandleClick.bind(this);
  }

  playHandleClick() {
    this.setState({ playClick: true, pauseClick: false });
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  pauseHandleClick() {
    clearInterval(this.intervalId);
    this.setState({ playClick: false, pauseClick: true });
  }

  clearHandleClick() {
    if (this.state.playClick === false) {
      this.setState({ time: 0 });
    }
  }

  render() {
    if (this.state.playClick === false) {
      return (
        <div>
          <div className="circle" onClick={this.clearHandleClick}>
            <div className="time">
              <h1>{this.state.time}</h1>
            </div>
          </div>
          <div className="play-button" onClick={this.playHandleClick}>
            <h1>&#9654;</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circle" onClick={this.clearHandleClick}>
            <div className="time">
              <h1>{this.state.time}</h1>
            </div>
          </div>
          <div className="pause-button" onClick={this.pauseHandleClick}>
            <h1>||</h1>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <StopWatch />,
  document.querySelector('#root')
);

// &#9654;
