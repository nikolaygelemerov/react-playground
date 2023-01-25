// Test rendering flow in class components

import React, { PureComponent } from 'react';

import { console } from '../../services';

const promisifySetState = setState => (updater, callback) => {
  return new Promise(resolve => {
    setState(updater, () => {
      typeof callback === 'function' && callback();
      resolve();
    });
  });
};

class AsyncSetState extends PureComponent {
  constructor(props) {
    super(props);

    this.setState = promisifySetState(this.setState.bind(this));

    this.state = { counter: 0, counter1: 0 };
  }

  // setState in same scope is batched
  onClick = async () => {
    // If awaited setState
    // will cause Render and Did update.
    // Else if setState of same scope will be batched.
    this.setState(prevState => ({
      ...prevState,
      counter: prevState.counter + 1
    }));

    console({
      value: `counter Function Call: ${this.state.counter}`,
      bgColor: 'orange'
    });

    await this.setState(prevState => ({
      ...prevState,
      counter1: prevState.counter1 + 1
    }));

    console({
      value: `counter1 Function call: ${this.state.counter1}`,
      bgColor: 'orange'
    });
  };

  render() {
    console({
      value: `counter Render: ${this.state.counter}`,
      bgColor: 'green'
    });

    console({
      value: `counter1 Render: ${this.state.counter1}`,
      bgColor: 'green'
    });

    return (
      <div>
        <button type="button" onClick={this.onClick}>
          CLick me
        </button>
        <p>{this.state.counter}</p>
        <p>{this.state.counter1}</p>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console({
      value: `counter Did Update: ${this.state.counter}`,
      bgColor: 'purple'
    });

    console({
      value: `counter1 Did Update: ${this.state.counter1}`,
      bgColor: 'purple'
    });
  }
}

export default AsyncSetState;
