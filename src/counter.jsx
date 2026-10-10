import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter App - Class Component</h2>
        <p>
          Current Count: <strong>{this.state.count}</strong>
        </p>
        <button onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;

