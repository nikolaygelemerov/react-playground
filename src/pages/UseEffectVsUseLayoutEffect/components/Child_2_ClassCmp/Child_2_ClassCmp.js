import { createRef, PureComponent } from 'react';

const foo = async () => {
  return new Promise((resolve, reject) => {
    let x = 0;

    while (x < 999999999) {
      x++;
    }

    resolve();
  });
};

class Child_2_ClassCmp extends PureComponent {
  state = { color: 'red' };

  ref = createRef();

  toggleColor = () => {
    this.setState(prevState => {
      return { color: prevState.color === 'red' ? 'green' : 'red' };
    });
  };

  componentDidMount() {
    // let x = 0;
    // while (x < 999999999) {
    //   x++;
    // }
    // this.setState({ color: 'green' });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('color: ', prevState.color, this.state.color);

    console.log(
      'SNAPSHOT ref.styles: ',
      getComputedStyle(this.ref?.current)?.['background-color'],
      getComputedStyle(document.querySelector('#wrapper'))?.['background-color']
    );
    return {
      prevColor: prevState.color,
      color: this.state.color
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    let x = 0;

    await foo();

    console.log(
      'DID UPDATE ref.styles: ',
      getComputedStyle(this.ref?.current)?.['background-color'],
      getComputedStyle(document.querySelector('#wrapper'))?.['background-color']
    );

    if (prevState.color !== this.state.color) {
      // this.setState({ color: 'yellow' });
    }

    // while (x < 999999999) {
    //   x++;
    // }

    if (prevState.color !== this.state.color) {
      // this.setState({ color: 'lightblue' });
    }
  }

  render() {
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
