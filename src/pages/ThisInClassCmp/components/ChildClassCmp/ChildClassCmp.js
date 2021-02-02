import { PureComponent, StrictMode } from 'react';

class ChildClassCmp extends PureComponent {
  componentDidMount() {
    console.log(this.props);
    this.props.onClick();
  }

  render() {
    return (
      <StrictMode>
        <button
          type="button"
          onClick={function () {
            console.log('this.inside: ', this);
            this.props.onClick();
          }}
        >
          ChildClassCmp
        </button>
      </StrictMode>
    );
  }
}

export default ChildClassCmp;
