import React from 'react';
import ReactDOM from 'react-dom';

function addTime() {
  return this.state.time + 1;
}

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.time === 0) {
      setInterval(this.setState(addTime(), 1000);
      console.log(this.state.time);
    } else {
      this.setState({ time: 0 });
      console.log('Fuck you');
    }
  }

  render() {
    if (this.state.time === 0) {
      return (
        <div>
          <div className="circle">
            <div className="time">
              <h1>{this.state.time}</h1>
            </div>
          </div>
          <div id="play" className="play-button" onClick={this.handleClick}>
            <h1>&#9654;</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circle">
            <div className="time">
              <h1>{this.state.time}</h1>
            </div>
          </div>
          <div id="pause" className="pause-button" onClick={this.handleClick}>
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
