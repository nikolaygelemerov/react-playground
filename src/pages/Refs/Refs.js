import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';

import { ClassCmp, ForwardFuncCmp, FuncCmp } from './components';

class Refs extends PureComponent {
  classCmpRef = React.createRef(null);
  forwardCmpRef = React.createRef(null);

  classCmpRefHandler = el => (this.classCmpRef = el);
  funcCmpRefHandler = el => (this.funcCmpRef = el);

  render() {
    return (
      <div>
        <ClassCmp ref={this.classCmpRef} />
        <ForwardFuncCmp ref={this.forwardCmpRef} />
        <FuncCmp onRef={this.funcCmpRefHandler} />
      </div>
    );
  }

  componentDidMount() {
    if (this.classCmpRef && this.classCmpRef.current) {
      console.log('this.classCmpRef.current: ', this.classCmpRef.current); // intance of ClassCmp component
      console.log('findDOMNode: ', findDOMNode(this.classCmpRef.current));
    }

    if (this.forwardCmpRef && this.forwardCmpRef.current) {
      console.log('this.forwardCmpRef: ', this.forwardCmpRef); // object with prop current {current: div}
    }

    if (this.funcCmpRef) {
      console.log('this.funcCmpRef: ', this.funcCmpRef); // DOM element (div)
    }
  }
}

export default Refs;
