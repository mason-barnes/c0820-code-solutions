import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isSwitchOn === false) {
      this.setState({ isSwitchOn: true });
    } else {
      this.setState({ isSwitchOn: false });
    }
  }

  render() {
    if (this.state.isSwitchOn === false) {
      return (
        <React.Fragment>
          <div className="off-button" onClick={this.handleClick}></div>
          <div className="off-text">
            <h1>Off</h1>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="on-button" onClick={this.handleClick}></div>
          <div className="on-text">
            <h1>On</h1>
          </div>
        </React.Fragment>
      );
    }
  }
}
