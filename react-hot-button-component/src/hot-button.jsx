import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount <= 2) {
      return <button onClick={this.handleClick} className="brown">Hot Button</button>;
    } else if (this.state.clickCount >= 3 && this.state.clickCount <= 5) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;
    } else if (this.state.clickCount >= 6 && this.state.clickCount <= 8) {
      return <button onClick={this.handleClick} className="light-purple">Hot Button</button>;
    } else if (this.state.clickCount >= 9 && this.state.clickCount <= 11) {
      return <button onClick={this.handleClick} className="pink">Hot Button</button>;
    } else if (this.state.clickCount >= 12 && this.state.clickCount <= 14) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (this.state.clickCount >= 15 && this.state.clickCount <= 17) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else if (this.state.clickCount >= 15) {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}
