import React from 'react';
import { AnimationControls, motion as m } from 'framer-motion';
// Assets
import line from '@assets/icons/line.svg';
import arrowRight from '@assets/icons/arrow-right.svg';
//* Animation
import arrowButtonVariants from './arrow-button.anim';

const ArrowButton: React.VFC<IProps> = (props) => {
  const { controls } = props;

  const transition = { duration: 0.2 };

  return (
    <div style={{ position: 'relative' }}>
      <m.img
        style={{ position: 'absolute' }}
        src={line}
        alt="Line"
        animate={controls}
        variants={arrowButtonVariants.line}
        initial="initial"
        transition={transition}
      />
      <m.img
        style={{ position: 'absolute' }}
        src={arrowRight}
        alt="Arrow right"
        animate={controls}
        variants={arrowButtonVariants.arrowRight}
        initial="initial"
        transition={transition}
      />
    </div>
  );
};

interface IProps {
  controls: AnimationControls;
}

export default ArrowButton;
