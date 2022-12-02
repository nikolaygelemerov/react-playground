import { memo } from 'react';

import Scroll from './Scroll';
import loremIpsum from './lorem-ipsum';

const SCROLL_CONFIG_VERTICAL = {
  direction: 'vertical',
  display: 'block',
  height: '400px',
  resizeDebounce: 300,
  scrollerClass: 'Scroller',
  track: true,
  trackClass: 'Track',
  trackShift: 50
};

const SCROLL_CONFIG_HORIZONTAL = {
  direction: 'horizontal',
  width: '400px'
};

const ScrollComponent = () => {
  return (
    <Scroll {...SCROLL_CONFIG_HORIZONTAL}>
      <Scroll {...SCROLL_CONFIG_VERTICAL}>
        <div className="Content">{loremIpsum}</div>
      </Scroll>
    </Scroll>
  );
};

export default memo(ScrollComponent);
