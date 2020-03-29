import React from 'react';
import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

const ResumeAvatar = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    const v = clamp(velocity, 1, 8);
    set({ xy: down ? delta : [0, 0], config: { mass: v, tension: 500 * v, friction: 50 } });
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} />;
};

export default ResumeAvatar;
