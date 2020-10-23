import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked === false) {
      return (
        <div className="container">
          <h1 className="menu-icon" onClick={this.handleClick}>&#9776;</h1>
        </div>
      );
    } else {
      return (
        <div className="flex-row">
          <div className="container">
            <h1 className="menu-title" onClick={this.handleClick}>Menu</h1>
            <div>
              <h2>About</h2>
              <h2>Get Started</h2>
              <h2>Sign In</h2>
            </div>
          </div>
          <div className="gray-area">

          </div>
        </div>
      );
    }
  }
}
