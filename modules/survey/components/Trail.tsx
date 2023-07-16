import React, { PropsWithChildren } from 'react';
import { a, useTrail } from '@react-spring/web';

const Trail: React.FC<PropsWithChildren<{ open: boolean }>> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 500 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 40,
    height: 'auto',
    from: { opacity: 0, y: 40, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
