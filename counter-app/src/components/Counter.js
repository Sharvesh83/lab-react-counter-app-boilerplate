import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decreaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <div className="button-container">
          <button onClick={this.increaseCount}>+</button>
          <button onClick={this.decreaseCount}>-</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
  
}

export default Counter;
