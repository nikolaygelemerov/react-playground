import { createRef, PureComponent } from 'react';

import { console as consoleSrv } from '../../../../services';

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

// The async function returns a promise
// When executed it creates a microtask
// Inserts in the end of the current callstack
// Blocks rendering
// Rendering cannot process untill the callstack is not empty
// const microtaskFn = async () => {
//   blocker();

//   return 'Resolve microtaskFn';
// };

// Returns a promise that resolves in a timeout
// The timeout creates a macrotask
// Even though the promise creates a microtask, in the body of Promise callback the timeout creates a macrotask
// The mactrotask is not blocking the rendering, as it's execution starts only when the callstack is empty
// const macrotaskFn = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Resolve macrotaskFn');
//     }, 3000);
//   });
// };

class Child_2_ClassCmp extends PureComponent {
  // Persist color state
  state = { color: 'red' };

  // Create a ref instance property
  ref = createRef();

  logger({ entry, color, bgColor }) {
    const bgValueComputed = getComputedStyle(
      this.ref?.current
    )?.getPropertyValue('background-color');

    const bgValueStyle =
      document.querySelector('#wrapper')?.style?.backgroundColor;

    consoleSrv({
      value: `${entry} styles 
      this.ref?.current: ${bgValueComputed}
      document.querySelector: ${bgValueStyle}`,
      bgColor: bgValueComputed,
      color
    });
  }

  // Toggle button listener, just toggling the state color
  toggleColor = () => {
    this.setState(prevState => {
      return { color: prevState.color === 'red' ? 'green' : 'red' };
    });
  };

  // Called immediately after the render method
  // Blocks rendering if a long scripting is run inside
  // Ideal hook for updating the dom without flashing
  async componentDidMount() {
    // macrotask won't block rendering
    // await macrotaskFn();

    // microtask or any syncronous scripting blocks rendering

    // await microtaskFn();

    // blocker();

    // Creates a microtask
    // Executes after current stack is done
    // Logs after componentDidUpdate

    /*
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => consoleSrv({ value: JSON.stringify(data) }));
      */

    // Test with slow 3g
    consoleSrv({ value: 'BEFORE AWAIT' });

    await Promise.resolve('SUCCESS').then(value => consoleSrv({ value }));

    /*
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const data = await response.json();
    consoleSrv({ value: JSON.stringify(data) });
    */

    new Promise(resolve => {
      blocker();

      resolve('PROMISE BLOCK');
    }).then(result => {
      consoleSrv({ value: result });
    });

    new Promise(resolve => {
      blocker();

      resolve('PROMISE BLOCK');
    }).then(result => {
      consoleSrv({ value: result });
    });

    this.logger({
      entry: 'componentDidMount',
      color: 'black',
      bgColor: 'pink'
    });

    this.setState({ color: 'green' });
    requestAnimationFrame(() => {
      consoleSrv({ value: 'RAF MOUNT' });
    });
  }

  // Runs syncronously after render
  // Preserverse old DOM state (before reflow and repaint)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.logger({
      entry: 'getSnapshotBeforeUpdate',
      color: 'black',
      bgColor: 'lightblue'
    });

    return {
      prevColor: prevState.color,
      color: this.state.color
    };
  }

  // Runs syncronously after getSnapshotBeforeUpdate
  // Blocks rendering if a long scripting is run inside
  // Ideal hook for updating the dom without flashing
  componentDidUpdate(prevProps, prevState, snapshot) {
    blocker();

    this.logger({
      entry: 'componentDidUpdate',
      color: 'black',
      bgColor: 'lightgreen'
    });

    if (prevState.color !== this.state.color) {
      this.setState({ color: 'yellow' });
    }
  }

  render() {
    console.log('RENDER');

    return (
      <div
        id="wrapper"
        ref={this.ref}
        style={{
          backgroundColor: this.state.color,
          width: '100%',
          height: 100
        }}
      >
        <button onClick={this.toggleColor}>Toggle Collor</button>
        Child 1
      </div>
    );
  }
}

export default Child_2_ClassCmp;
