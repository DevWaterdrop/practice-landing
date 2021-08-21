import React from 'react';
import { motion as m } from 'framer-motion';
//* Animation
import spanTransition from './char.anim';
// Helpers
import { sc } from '../third-slide'; //* short-class

const Char: React.FC<IProps> = (props) => {
  const { children, show, mobile = false, right = false } = props;

  const marginX = right ? -4 : -5.25;

  if (mobile) {
    return (
      <m.span
        className={sc('char')}
        animate={{
          x: `${show.x}rem`,
          y: `${show.y}rem`,
          rotate: show.rotate,
          transition: spanTransition.show.default
        }}
        transition={spanTransition.exit}
      >
        {children}
      </m.span>
    );
  }

  return (
    <m.span
      className={sc('char')}
      initial={{
        x: `${marginX}rem`
      }}
      // initial={{
      //   ...show,
      //   x: `${show.x}rem`,
      //   y: `${show.y}rem`,
      //   rotate: show.rotate
      // }}
      variants={{
        show: {
          x: `${show.x}rem`,
          y: `${show.y}rem`,
          rotate: show.rotate,
          transition: spanTransition.show.default
        }
      }}
      transition={spanTransition.exit}
    >
      {children}
    </m.span>
  );
};

interface IProps {
  show: { x: number; y: number; rotate: number };
  mobile?: boolean;
  right?: boolean;
}

export default Char;
