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
      bgColor: 'orange',
      value: `counter Function Call: ${this.state.counter}`
    });

    await this.setState(prevState => ({
      ...prevState,
      counter1: prevState.counter1 + 1
    }));

    console({
      bgColor: 'orange',
      value: `counter1 Function call: ${this.state.counter1}`
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console({
      bgColor: 'purple',
      value: `counter Did Update: ${this.state.counter}`
    });
    console({
      bgColor: 'purple',
      value: `counter1 Did Update: ${this.state.counter1}`
    });
  }

  render() {
    console({
      bgColor: 'green',
      value: `counter Render: ${this.state.counter}`
    });
    console({
      bgColor: 'green',
      value: `counter1 Render: ${this.state.counter1}`
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
}

export default AsyncSetState;
