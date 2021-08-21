import React from 'react';
import { motion as m } from 'framer-motion';
//* Animation
import spanAnimation from './char.anim';
// Helpers
import { sc } from '../fourth-slide'; //* short-class

const Char: React.FC<IProps> = (props) => {
  const { children, show, inView } = props;

  return (
    <m.span
      className={sc('char')}
      animate={inView ? { ...show, transition: spanAnimation.show } : undefined}
      transition={spanAnimation.exit}
    >
      {children}
    </m.span>
  );
};

interface IProps {
  inView: boolean;
  show: { x: number; y: number; rotate: number };
}

export default Char;
