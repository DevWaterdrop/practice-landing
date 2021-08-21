import { motion as m, MotionValue, PanInfo } from 'framer-motion';
import React, { useMemo } from 'react';

const Slide: React.FC<IProps> = ({ i, renderPage, x, onDragEnd }) => {
  const child = useMemo(() => renderPage({ i }), [i, renderPage]);

  return (
    <m.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        x,
        left: `${i * 100}%`,
        right: `${i * 100}%`
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </m.div>
  );
};

interface IProps {
  i: number;
  renderPage: (props: { i: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

export default Slide;
