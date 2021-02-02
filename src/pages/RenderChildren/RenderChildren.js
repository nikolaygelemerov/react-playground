import React, { memo, PureComponent, useState } from 'react';

import { Child_1, GrandChild_1 } from './components';

import { RandomContextProvider } from './context';

const RenderChildren = () => {
  const [update, setUpdate] = useState({});

  return (
    <div>
      RenderChildren
      <Child_1>
        <GrandChild_1>
          <div>Content</div>
        </GrandChild_1>
      </Child_1>
      <button
        type="button"
        onClick={() => {
          setUpdate({});
        }}
      >
        Update
      </button>
    </div>
  );
};

class RenderChildrenClass extends PureComponent {
  state = { update: {} };

  render() {
    return (
      <RandomContextProvider>
        <div>
          RenderChildren
          <RenderChildren propUpdate={this.state.update} />
          <button
            type="button"
            onClick={() => {
              this.setState({ update: {} });
            }}
          >
            Update Class
          </button>
        </div>
      </RandomContextProvider>
    );
  }
}

export default memo(RenderChildrenClass);
