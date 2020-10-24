import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  render() {
    const minimum = 8;
    if (this.state.value === '') {
      return (
        <div>
          <h1>Password</h1>
          <div className="flex">
            <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
            <h2 className="red">&#xd7;</h2>
          </div>
          <p className="red">A password is required.</p>
        </div>
      );
    } else if (this.state.value.length < minimum) {
      return (
        <div>
          <h1>Password</h1>
          <div className="flex">
            <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
            <h2 className="red">&#xd7;</h2>
          </div>
          <p className="red">Your password is too short.</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Password</h1>
          <div className="flex">
            <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
            <h2 className="green">&#x2713;</h2>
          </div>
        </div>
      );
    }
  }
}
