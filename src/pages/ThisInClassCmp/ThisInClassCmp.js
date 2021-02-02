import { PureComponent } from 'react';

import { ChildClassCmp } from './components';

class ThisInClassCmp extends PureComponent {
  onClick() {
    console.log('this: ', this);
  }

  render() {
    return (
      <div>
        ThisInClassCmp
        <br />
        <button type="button" onClick={this.onClick}>
          ThisInClassCmp
        </button>
        <ChildClassCmp onClick={this.onClick} />
      </div>
    );
  }
}

export default ThisInClassCmp;
